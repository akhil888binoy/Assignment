import mongoose from "mongoose";

const BookSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    bookTitle: {
      type: String,
      required: true,
    },

    author: String,
    genre: String,
    price: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", BookSchema);

export default Book;
