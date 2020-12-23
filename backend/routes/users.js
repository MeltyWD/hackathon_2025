const usersRouter = require('express').Router();
const fs = require('fs');
const path = require('path');
const users = require('../data/users.json');

const filePath = path.resolve('data', 'users.json');

const sendUsers = (req, res, next) => {
  const fileReader = fs.createReadStream(filePath, { encoding: 'utf8' });
  fileReader.pipe(res)
};

const sendUsersForId = (req, res, next) => {
  const { id } = req.params;

  const user = users.find(userId => userId._id == id)

  if (user === undefined) {
    res.send({ "message": "Нет пользователя с таким id" });
    return;
  }

  res.send(user);
}

usersRouter.get('/:id', sendUsersForId);

usersRouter.get('/', sendUsers);

module.exports = usersRouter;