const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const mongoose =  require("mongoose");
const User = require("./models/user");
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(bodyParser.urlencoded({ extended: false }));

const connection = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://ridhamanand31:Lionelmessi10@seniordb.vwwrb67.mongodb.net/");
        console.log("Laksh DB connected");

    }catch(e){
        console.log("Error while connection DB", e);
    }
  
}


connection();


app.get("/login", (req, res) => {
    res.render("login");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.post("/login", async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email,password});
    console.log(user);
    if(!user){
        res.send('invalid login details')
    }else{
        res.send('login successfull')
    }
    console.log(email, password);
})

app.post("/register",async (req, res) => {

    const { email, password,name} = req.body;
    console.log(req.body);
    console.log(email,password,name);
    const user = await User.create({email,password,name});
    await user.save();
    res.send("Registration Successfull")
    
})
app.listen(8000, () => {
    console.log("Server running on port 8001");
})