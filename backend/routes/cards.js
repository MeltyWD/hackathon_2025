const cardsRouter = require('express').Router();
const fs = require('fs');
const path = require('path');

const filePath = path.resolve('data', 'cards.json');


const sendCards = (req, res, next) => {
  const fileReader = fs.createReadStream(filePath, { encoding: 'utf8' });
  fileReader.pipe(res)
};

cardsRouter.get('/', sendCards);

module.exports = cardsRouter;