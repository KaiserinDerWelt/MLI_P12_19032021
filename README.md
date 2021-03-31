
# Dashboard 
## Run back end

### Prerequisites
- NodeJS (version 12.18)
- Yarn
If you are working with several versions of NodeJS, we recommend you install nvm. This tool will allow you to easily manage your NodeJS versions.

### Launching the project
- Fork the repository
- Clone it on your computer.
- The yarn command will allow you to install the dependencies.
- The yarn dev command will allow you to run the micro API.

### Run the front end`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Endpoints
### Possible endpoints
This project includes four endpoints that you will be able to use:

- http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).

- http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.

- http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.

- http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).

Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

## Examples of queries
- http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
- http://localhost:3000/user/18 - Retrieves user 18's main information.
