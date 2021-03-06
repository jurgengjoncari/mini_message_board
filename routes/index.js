var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const options = {
  title: 'Mini Messageboard', 
  messages: messages
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', options);
});

/* GET form. */
router.get('/new', function(req, res, next) {
  res.render('form', {title: "Form"});
});

/*POST request */
router.post('/new', function (req, res, next) {
  var text = req.body.message;
  var author = req.body.author;
  var message = {
    text: text,
    author: author,
    added: new Date()
  }
  messages.push(message);
  res.redirect('/')
})

module.exports = router;
