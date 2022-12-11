const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    order: { type: String },
    orderDate: { type: Number },
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    status: { type: String },
    shipDate: { type: Number },
    total: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = model("HistoryPurchase", schema);
