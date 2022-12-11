const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    firstName: { type: String },
    lastName: { type: String },
    street: { type: String },
    house: { type: String },
    flat: { type: String },
    intercom: { type: String },
    entrance: { type: String },
    floor: { type: String },
    city: { type: String },
    postalCode: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("UserAddres", schema);
