// This middleware handles errors and sends a generic error message.
export default function errorHandler(err, req, res, next) {
    console.error(err.stack); // Log the error stack trace
    res.status(500).send('Something went wrong!'); // Send a 500 response
  }
  