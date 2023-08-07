import express from "express";
import Transaction from "../models/Transaction.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 }); //Getting the latest 50 transactions
    res
      .status(200)
      .json(transactions); /**Sent the products along with the response code */
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
