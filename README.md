# Form Data Management with Redux

## Description

This program is designed to manage form data using React and Redux. The main functionality includes a page with four input fields where users can enter data and submit it using a submit button. Upon submission, the entered data is displayed in a table below the form. Additionally, there is another page that displays the same table with existing added data. Redux is utilized for state management across the application.

## Features

- **Form Page**:
  - Four input fields: username, email address, password, and role.
  - Users are required to fill all fields accurately to activate the submit button.
  - Upon submission, the entered data is stored in the Redux store.
- **Table Display**:
  - The submitted data is displayed in a table below the form.
  - The table includes columns for username, email address, password, and role.
- **Redux Integration**:
  - Redux is used for state management to store and retrieve form data.
  - Redux actions and reducers handle the storage and retrieval of data.
- **Navigation**:
  - The application utilizes React Router for navigation between pages.
  - There are two pages: the form page and the table display page.
- **Error Handling**:
  - Users are prompted to fill all fields accurately before submission.
  - Password validation ensures the password is at least 8 characters long.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the command `npm install`
4. Install dependencies using `npm install`.

## Usage

1. Run the application using `npm start`.
2. Access the application in your browser at `http://localhost:3000`.
3. Fill the form with accurate information and submit.
4. View the submitted data in the table below the form.
5. Navigate to the table display page to see the existing data.

## Technologies Used

- React
- Redux
- React Router
- Axios
- HTML/CSS

## Folder Structure
