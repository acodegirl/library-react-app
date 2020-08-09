const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const bookSchema = mongoose.Schema({
  name: { type: String, minLength: 4, maxLength: 255, required: true },
  author: { type: String, minLength: 4, maxLength: 255, required: true },
  genre: { type: String, minLength: 4, maxLength: 255, required: true }
});

const Book = new mongoose.model('Book', bookSchema);

//Validate book record input fields
function validateBook(book) {
  const schema = Joi.object({
    name: Joi.string()
      .min(4)
      .required(),
    author: Joi.string()
      .min(4)
      .required(),
    genre: Joi.string()
      .min(4)
      .required()
  });
  return schema.validate(book);
}

module.exports.Book = Book;
module.exports.validate = validateBook;
