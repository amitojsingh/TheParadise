var express = require('express');
var router = express.Router();

var ctrlbook = require('../controllers/book');

router.get('/books', ctrlbook.getbooks);
router.post('/books', ctrlbook.createbook);
router.get('/books/:bookid', ctrlbook.getSinglebook);
router.put('/books/:bookid', ctrlbook.updatebook);
router.delete('/books/:bookid', ctrlbook.deletebook);

module.exports = router;