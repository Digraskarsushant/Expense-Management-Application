const express = require("express");
const {collection,Expense} = require("./mongodb");
const session = require("express-session");
const cors = require("cors");
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


app.use(
    session({
      secret: "your-secret-key",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false },
    })
);


app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const data = {
      name: name,
      email: email,
      password: password
  };

  try {
      const check = await collection.findOne({ email: email });

      if (check) {
          res.json("exist");
      } else {
          req.session.user = data;
          await collection.insertMany([data]);
          res.json("notexist");
      }
  } catch (e) {
      res.json("fail");
  }
});


app.get('/api/users', async (req, res) => {
    try {
      const users = await collection.find({}, 'name');
  
      if (users.length > 0) {
        res.json(users.map(user => user.name));
      } else {
        res.json([]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get("/api/currentuser", (req, res) => {
    const currentUser = req.session.user;

    if (currentUser) {
        res.json(currentUser.name);
    } else {
        res.status(401).json({ error: "User not authenticated" });
    }
});


app.post("/api/add-expense", async (req, res) => {
  try {
    const { description, amount, payer, peoplePaidFor } = req.body;

    const peoplePaidForNames = [];

    for (const userName of peoplePaidFor) {
      const user = await collection.findOne({ name: userName });

      if (user) {
        peoplePaidForNames.push(user.name);
      } else {
        return res.status(400).json({ error: `User '${userName}' not found` });
      }
    }

    const expenseData = {
      description: description,
      amount: amount,
      user: payer,
      peoplePaidFor: peoplePaidForNames,
    };

    const result = await Expense.create(expenseData);

    res.json({
      description: result.description,
      share: result.amount,
      user: result.user,
      peoplePaidFor: result.peoplePaidFor,
    });

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



app.listen(8000,()=>{
    console.log("port connected");
})