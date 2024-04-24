const express=require("express")
const app=express()
const hbs=require("hbs")
const path=require("path")
const collection=require("./mongodb")
const tempelatePath=path.join(__dirname,'../tempelates')

const nodemailer = require('nodemailer');
let nameG = null;
let emailG=null;
app.use(express.static('public'));
app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("login")
})

app.get("/home",async (req,res)=>{
    res.render("home");
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.name });
        if (check && check.password === req.body.password) {
            nameG = req.body.name;
            // res.render("profile", {user: check});
            // console.log(check);
            res.render("home");
        } else {
            res.render("login", { errorMessage: "Wrong Password or Username" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.render("login", { errorMessage: "Something went wrong" });
    }
});

app.post("/signup", async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };

        await collection.insertMany([data]);
        emailG=req.body.email;
        res.redirect("/login");
    } catch (error) {
        console.error("Error during signup:", error);
        res.render("signup", { errorMessage: "Error signing up" });
    }
});


app.get("/profile", async (req,res)=>{
  
    const check = await collection.findOne({ name: nameG });
    const check2 = await collection.findOne({ email: emailG });

    res.render("profile", {user: check,user: check2});
})
app.get("/dsa",async(req,res)=>{
    res.render("dsa");
})

app.get("/contact",async(req,res)=>{
    res.render("contact");
})



app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "pankajpal3376@gmail.com",
            pass: "ujyk zvtm qsxj pwxl",
        },
    });

    const mailOptions = {
        from: email,
        to: 'pankajpal3376@gmail.com',
        subject: 'Query',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent:', info.response);
            
            res.render('home', { message: 'Email sent successfully!' });
        }
    });
});

app.listen(3000,()=>{
    console.log("Server is running");
})