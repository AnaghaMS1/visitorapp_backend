const express= require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const securityRouter=require("./controllers/securityRouter")

const app=express()

app.use(express.json())
app.use(cors())

/*app.get("/get",async(req,res)=>{
    res.send("hai")
    })

   
app.post("/post",async(req,res)=>{
    res.send("hai")
    })*/

app.use("/security",securityRouter)

mongoose.connect("mongodb+srv://Anagha123:anagha123@cluster0.8e1jiqb.mongodb.net/securityDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)



app.listen(3001,()=>{
    console.log("server running")
})