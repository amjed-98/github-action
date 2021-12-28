const router = require('express').Router();
const getData = require('../Database/query/getData');
const addBook = require('../Database/query/postData');
const reserveBook = require('../Database/query/reserveBook');

router.get('/', (req, res) => {
  res.json({ msg : 'welcome to github actions' })
});

router.get('/books', (req, res) => {
  getData()
    .then((result) => res.json(result.rows))
    .catch(console.error);
});

router.post('/add_book', (req, res) => {
  addBook(req.body)
    .then(() => res.redirect('/'))
    .catch(console.error);
});

router.post('/reserve', (req, res) => {
  reserveBook(req.body)
    .then(() => res.redirect('/'))
    .catch(console.error);
});

module.exports = router;
