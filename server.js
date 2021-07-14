const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/Db");
const userRoutes = require("./Routers/UserRoutes");
const productRoutes = require("./Routers/ProductRoutes");

dotenv.config();
connectDB()
app.use(express.json());
app.use(cors());

app.get("/",(req,res) =>{
    res.send("ok");
})
app.use("/users", userRoutes);
app.use("/products", productRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`app is runnig on ${port}`);
    
})