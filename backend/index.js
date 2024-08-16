import express from "express"

const app =express()

app.get('/test',(req,res)=>{
return res.json("ok but not strd")

})
app.listen(8080,()=> console.log("Listen at 8080"))