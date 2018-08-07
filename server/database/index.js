const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb://localhost:27017/sampleApp',
  { useNewUrlParser: true },
);

const Input = mongoose.model('Input', new mongoose.Schema({ content: String }));

const insertInput = async string => Input.create({ content: string });

const getHistory = async () =>
  Input.find()
    .exec()
    .then(data => data.map(row => row.content));

module.exports = {
  insertInput,
  getHistory,
};
