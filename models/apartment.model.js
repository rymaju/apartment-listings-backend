const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    username: { type: String, required: true },
    rating: { type: Number, required: true },
    comments: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

const apartmentSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    neighborhood: { type: String, required: true },
    description: { type: String, required: true },
    rent: { type: Number, required: true },
    date: { type: Date, required: true },
    reviews: { type: [reviewSchema], required: true }
  },
  {
    timestamps: true
  }
);

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;
