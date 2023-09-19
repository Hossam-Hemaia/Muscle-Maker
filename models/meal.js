const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema(
  {
    mealTitle: {
      type: String,
    },
    mealTitleEn: {
      type: String,
    },
    mealType: {
      type: String,
    },
    menuType: {
      type: String,
    },
    mealRank: {
      type: Number,
    },
    protine: {
      type: String,
    },
    carbohydrates: {
      type: String,
    },
    fats: {
      type: String,
    },
    calories: {
      type: String,
    },
    sugar: {
      type: String,
    },
    mealDescription: {
      type: String,
    },
    imagePath: {
      type: String,
    },
    selectionRule: {
      redundancy: { type: Number, default: 0 },
      period: { type: Number },
    },
    mealBlocked: {
      type: Boolean,
      default: false,
    },
    mealPrice: {
      type: Number,
      default: 0,
    },
    extras: [
      {
        extraId: { type: Schema.Types.ObjectId, ref: "extras" },
      },
    ],
  },
  { timestamps: true, strictPopulate: false }
);

module.exports = mongoose.model("meal", mealSchema);
