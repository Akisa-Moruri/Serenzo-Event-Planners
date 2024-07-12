# SERENZO EVENT PLANNERS
Serenzo Event Planners is a web application built with a React frontend and a Flask backend for managing users, events, and event registrations. This application supports role-based authentication, allowing organizers to create and manage events and users to register for events.

## FEATURES
### USER MANAGEMENT
* Register User: Create a new user with details such as name, email, phone number, and role (organizer or attendee).
* Login User: Authenticate user credentials and provide access to the system with a JWT token.
* Update User: Update user details such as name, phone number, and role.
* Logout User: Log out the user and invalidate the JWT token.
* Fetch Current User: Retrieve the current logged-in user's details.

### EVENT MANAGEMENT
* Create Event: Organizers can create new events with details such as event name, description, date, and location.
* View Events: Users can view a list of all events.
* Update Event: Organizers can update event details.
* Delete Event: Organizers can delete events

### EVENT REGISTRATION
* Register for Event: Users can register for events.
* View Registrations: View a list of all registrations.

## INSTALLATION
### PRE-REQUISITES
* Node.js
* Python 3.x
* Flask
* Flask-RESTful
* Flask-JWT-Extended
* SQLAlchemy
* React
* React Router

### SETTING UP
Clone this repository to your machine
#### FRONTEND
* Navigate to the front end directory
* To start the server, run:

        npm start
    
#### BACKEND
* Navigate to the backend directory
* Create virtual env by running: 

        python -m venv venv

* Run the virtual environment
* Install dependencies by running:

        pip install -r requirements.txt

* Set up the database by running:

        flask db upgrade

* Run the server by running:

        flask run

## USAGE
* Register as a User: Go to the registration page and create a new account.
* Login: Log in using your email and password.
* View Events: Navigate to the events page to see the list of events.
* Create Event: If you are an organizer, you can create new events.
* Register for Event: Register for events you are interested in.
* Manage Events: Organizers can update or delete their events.

## CONTRIBUTION
Contributions to the Serenzo Event Planners are welcome! If you find any bugs, have suggestions for improvements, or want to add new features, please open an issue or submit a pull request on the GitHub repository

Also feel free to reach out to:
Bruce Serede

📞Phone:+254790132335

Akisa Moruri

📞Phone:+254795105127

Betsy Biegon

📞Phone:+254793990569

Anthony Gachie

📞Phone:+254728661476

