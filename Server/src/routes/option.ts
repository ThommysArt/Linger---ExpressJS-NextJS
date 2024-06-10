import express from 'express';
import bodyParser from 'body-parser';
import OptionController from './optionController';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/options', OptionController.createOption);
app.put('/options/:id', OptionController.updateOption);
app.get('/options/:id', OptionController.getOption);
app.get('/questions/:questionId/options', OptionController.getQuestionOptions);
app.delete('/options/:id', OptionController.deleteOption);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
