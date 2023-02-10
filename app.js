const express=require('express');
const app = express()



app.get('/', (req, res)=>{
	res.send("testing pipeline ");
})


const port = process.env.port || 3000;
app.listen(port,()=>{
	
})