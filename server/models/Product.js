import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

/**Schema is defined for Product */

const Schema = mongoose.Schema;
loadType(mongoose);

const ProductSchema = new Schema(
  {
    price: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100, //mongoose currency is generally stored 10 times the real value
    },
    expense: {
      type: mongoose.Types.Currency,
      currency: "INR",
      get: (v) => v / 100,
    },
    transactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction",
      },
    ],
  },
  {
    timestamps: true /**Timestamps will be automatically saved, no need to define them in schema */,
    toJSON: { getters: true /**To be able to execute the getters. */ },
  }
);
/** model(name, schema) */
const Product = mongoose.model("Product", ProductSchema);
export default Product;
