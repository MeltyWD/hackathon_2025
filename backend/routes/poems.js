const poemsRouter = require('express').Router();
const poemList = require('../data/poems.json');

const sendPoemList = (req, res) => {
  res.status(200).send(poemList)
};

const poemSliceSend = (poemList) => {
  if (poemList.length > 10) {
    return(poemList.slice(0,10))
  } else {
    return(poemList)
  }
}

const sendPoem = (req, res) => {
  const { searchText, searchText2, searchText3 } = req.params;
  const foundPoems = poemList.reduce((sum, item) => {
    const text = item.fields.text
    const hasText = text.includes(searchText)
    if (!hasText) return sum
    return sum.concat(item)
  }, [])
  if (foundPoems.length !== 0) {
    const foundPoems2 = foundPoems.reduce((sum, item) => {
      const poem = item.fields.text
      const hasText = poem.includes(searchText2)
      if (!hasText) return sum
      return sum.concat(item)
    }, [])
    if (foundPoems2.length !== 0) {
      const foundPoems3 = foundPoems2.reduce((sum, item) => {
        const poem = item.fields.text
        const hasText = poem.includes(searchText3)
        if (!hasText) return sum
        return sum.concat(item)
      }, [])
      if (foundPoems3.length !== 0) {
        res.send(poemSliceSend(foundPoems3))
      } else {
        res.send(poemSliceSend(foundPoems2))
      }
    } else {
      res.send(poemSliceSend(foundPoems))
    }
  } else {
    res.send(foundPoems)
  }
}

poemsRouter.get('/', sendPoemList);
poemsRouter.get('/:searchText/:searchText2/:searchText3', sendPoem);

module.exports = poemsRouter;