import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

// Import the routers
import LanguageRouter from './routes/language'

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

// Start the server
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});