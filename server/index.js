import express from 'express';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';
import cors from 'cors'; // Import the cors middleware
import apiRoutes from './routes/api.js'; // Import the API routes
import errorHandler from './middleware/error.js'; // Import the error handling middleware

// Convert the import.meta.url to a filesystem path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// * assign constant for express app and port
const app = express();
const port = 3000;


// Use cors middleware for cross-origin requests
app.use(cors());

// Use body-parser middleware for JSON and URL-encoded requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Use API routes with /api prefix
app.use('/api', apiRoutes);

// Use error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is successfully running at localhost:${port}`);
});
