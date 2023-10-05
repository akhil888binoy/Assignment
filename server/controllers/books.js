import Book from "../models/Book.js";
import User from "../models/User.js";

/* CREATE */
export const createBook = async (req, res) => {
  try {
    const {
      userId,
      bookTitle,
      author,
      price,
      genre,
      description,
      picturePath,
    } = req.body;
    const user = await User.findById(userId);
    const newBook = new Book({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      bookTitle,
      author,
      genre,
      price,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
    });
    await newBook.save();

    const book = await Book.find();
    res.status(201).json(book);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedBooks = async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).json(book);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserBooks = async (req, res) => {
  try {
    const { userId } = req.params;
    const book = await Book.find({ userId });
    res.status(200).json(book);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const book = await Book.findById(id);
    const isLiked = book.likes.get(userId);

    if (isLiked) {
      book.likes.delete(userId);
    } else {
      book.likes.set(userId, true);
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { likes: book.likes },
      { new: true }
    );

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
