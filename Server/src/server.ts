import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

// Import the routers
import LanguageRouter from './routes/language'
import UserRouter from './routes/user'
import UserLanguageRouter from './routes/userLanguage'
import QuizRouter from "./routes/quiz";
import FinishedQuizRouter from "./routes/finishedQuiz"
import QuestionRouter from "./routes/question";
import OptionRouter from "./routes/option"

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors())

// Routes

// Add other routes from the ./routes/* directory
// for example:
// app.use("/api/v1/users", UsersRoueter)
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Linger Server');
});

app.use("/api/v1/language", LanguageRouter)
app.use("/api/v1/users", UserRouter)
app.use('/api/v1/user-language', UserLanguageRouter)
app.use("/api/v1/", QuizRouter)
app.use("/api/v1/", FinishedQuizRouter)
app.use("/api/v1/", QuestionRouter)
app.use("/api/v1/", OptionRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}/api/v1`);
});