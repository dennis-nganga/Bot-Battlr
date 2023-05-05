Bot Army React App
This is a simple web application built using React, which allows you to enlist, release and discharge bots into and from your bot army. The application is connected to a local server that serves bot data using a REST API.

Features
The application has the following features:

Enlist bots: You can add bots to your army by clicking the enlist button on the bot card.
Release bots: You can remove bots from your army by clicking the release button on the bot card in the army list.
Discharge bots: You can completely remove bots from the database by clicking the discharge button on the bot card in the army list.
Installation
To run this application locally, follow these steps:

Clone this repository to your local machine.
Navigate to the cloned repository in your terminal.
Run npm install to install the required dependencies.
Run npm start to start the development server.
Open http://localhost:3000 in your web browser to view the application.
Components
The application has the following components:

App: The main component that holds the bot collection and the user's bot army. It fetches bot data from the local server and passes it to the BotCollection and YourBotArmy components.
BotCollection: Renders a list of bots that the user can enlist into their army.
YourBotArmy: Renders a list of bots that the user has enlisted into their army. It also provides the option to release or discharge bots from the army list.
API
The application is connected to a local server that serves bot data using a REST API. The API has the following endpoints:

GET /bots: Returns a list of all bots in the database.
DELETE /bots/:id: Deletes a bot with the given id from the database.
Acknowledgements
This application was created as part of a coding challenge and is not intended for commercial use. The bot images used in the application are from RoboHash.
