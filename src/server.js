const express = require('express');
const {userRegistration} = require('./api/userRegistration');
const app = express();
app.use(express.json())
app.post('/register',(req,res)=>{
    try{
        userRegistration(req.body.name,req.body.email,req.body.password)
        res.status(201).send("user registered")

    }
    catch(err){
        res.status(400).send(err.message)
    }
})
module.exports = app;

if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
