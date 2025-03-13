import express from "express"
import { processPayments, getKey, paymentVerification } from "../controller/product.js";

const router = express.Router();

router.route("/payment/process").post(processPayments)
router.route("/getKey").get(getKey)
router.route("/paymentVerification").post(paymentVerification)

export default router