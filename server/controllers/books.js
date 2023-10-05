import Book from "../models/Book.js";
import User from "../models/User.js";

/* CREATE */
export const createBook = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newBook = new Book({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newBook.save();

    const Book = await Book.find();
    res.status(201).json(Book);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedBooks = async (req, res) => {
  try {
    const Book = await Book.find();
    res.status(200).json(Book);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserBooks = async (req, res) => {
  try {
    const { userId } = req.params;
    const Book = await Book.find({ userId });
    res.status(200).json(Book);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const Book = await Book.findById(id);
    const isLiked = Book.likes.get(userId);

    if (isLiked) {
      Book.likes.delete(userId);
    } else {
      Book.likes.set(userId, true);
    }

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { likes: Book.likes },
      { new: true }
    );

    res.status(200).json(updatedBook);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
