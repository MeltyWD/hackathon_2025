const express = require('express');
const cors = require('cors')
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/poems');

const { PORT = 3000 } = process.env;

const app = express();

app.use(cors());
app.use('/users', usersRouter);
app.use('/poems', cardsRouter);
app.use((req, res, next) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
    // Если всё работает, консоль покажет, какой порт приложение слушает
    console.log(`App listening on port ${PORT}`)
})