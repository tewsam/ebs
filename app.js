const express=require('express');
const app = express()



app.get('/', (req, res)=>{
	res.send("Hello anta tewe");
})


const port = process.env.port || 3000;
app.listen(port,()=>{
	// console.log("tew tew tew");
})