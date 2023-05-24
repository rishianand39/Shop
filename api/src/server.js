import app from "./index.js"
import dotenv from "dotenv"
import connect from "./configs/db.js";
dotenv.config();


const PORT =process.env.PORT || 8000;
app.listen(PORT,async()=>{
    try {
         connect();
        console.log(`server running on port ${PORT}`);
    } catch (error) {
        console.log(error);
    }
})