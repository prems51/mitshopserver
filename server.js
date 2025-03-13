import app from "./app.js";
import dotenv from "dotenv"
import Razorpay from "razorpay";

dotenv.config({ path: "config.env" })

const PORT = process.env.PORT || 3000;

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,

});

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})