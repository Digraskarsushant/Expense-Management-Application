const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/splitwise")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const expenseSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    peoplePaidFor: [{
      type: String,
      required: true,
    }],
    timestamp: {
      type: Date,
      default: Date.now,
    },
  });

const collection = mongoose.model("splitwise",newSchema)
const Expense = mongoose.model("Expense", expenseSchema)

module.exports={collection:collection,Expense:Expense}
