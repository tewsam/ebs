const express=require('express');
const app = express()



app.get('/', (req, res)=>{
	res.send("code pipeline with github works well ");
})


const port = process.env.port || 3000;
app.listen(port,()=>{
	
})