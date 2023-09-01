# Wishlist To-Do List

The Wishlist To-Do List is a web application that allows users to manage their wishlist items. Users can add items they wish to purchase or accomplish, mark them as completed when done, and remove items that are no longer of interest.


## Personal Interest

The wishlist app is my first attempt at integrating backend to a frontend project, and i have used this opportunity to lay down my 2023 Development Wishlist.

## Features

- **Add Items:** Users can input the name and description of the desired item to add it to their wishlist.
- **Mark as Completed:** When a wishlist item has been acquired or achieved, users can mark it as completed.
- **Remove Items:** Users have the option to remove items from their wishlist if they are no longer of interest.
- **Responsive Design:** The web application features a responsive design, ensuring optimal usability across various screen sizes.

## Technologies Used

- **HTML:** Used for structuring the web page's content.
- **CSS:** Applied for visually enhancing and styling the user interface.
- **JavaScript:** Implemented to introduce interactivity and manage the wishlist's functionality.
- **Node.js:** Used to create a backend server to manage wishlist items.
- **Express.js:** A Node.js framework used to build the backend API.

## Folder Structure

The project's folder structure is organized as follows:

- **public:** Contains the HTML, CSS, and JavaScript files for the frontend.
  - `index.html`: The main HTML file for the web application.
  - `liststyle.css`: The CSS file for styling the application.
  - `listscript.js`: The JavaScript file for adding, marking, and removing wishlist items.

- **routes:** Contains the backend API routes.
  - `api.js`: Defines the API endpoints for managing wishlist items.

- **middleware:** Contains error handling middleware.
  - `error.js`: Handles and logs errors.

- `index.js`: The main entry point for the Node.js server.

## Backend Integration

The Wishlist To-Do List is integrated with a backend server to store and manage wishlist items. This backend is built with Node.js and Express.js. Here's how the integration works:

- **GET /api/todo:** This endpoint retrieves the current list of wishlist items from the server and sends it to the frontend as JSON.

- **POST /api/todo:** When a user adds a new item to their wishlist, the frontend sends a POST request to this endpoint with the item's details. The server then adds the item to the wishlist and sends a success message.

- **DELETE /api/todo/:task:** When a user removes an item from their wishlist, the frontend sends a DELETE request to this endpoint with the name of the item to be removed. The server filters the item out of the wishlist and sends a success message.

