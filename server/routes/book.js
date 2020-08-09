const Joi = require('@hapi/joi');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const _ = require('lodash');
const { Book, validate } = require('../model/book');
const express = require('express');
const router = express.Router();

// GET books sorted by Name
router.get('/', auth, async (req, res) => {
  const books = await Book.find().sort('name');
  res.send(books);
});

// GET book by id
router.get('/:id', auth, async (req, res) => {
  const book = await Book.findById(req.book._id);
  if (!book) return res.status(404).send('Given book id is not found');
  res.send(user);
});

// POST - add book
router.post('/', auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let book = await Book.findOne({ name: req.body.name });
  if (book) {
    return res.status(400).send('Book already exists');
  }

  book = new Book(_.pick(req.body, ['name', 'author', 'genre']));
  await book.save();
  res.send(book);
});

// PUT - edit book
router.put('/:id', (req, res) => {
  const book = Book.find(f => f.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book Id is not found');
  const { error } = validateFilm(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  book.name = req.body.name;
  book.author = req.body.author;
  book.genre = req.body.genre;
  res.send(book);
});

// DELETE - remove book
router.delete('/:id', [auth, admin], async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);

  if (!book) return res.status(404).send('Book with given id is not found');

  res.send(book);
});

module.exports = router;
