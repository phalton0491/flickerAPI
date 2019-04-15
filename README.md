This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## IMPORTANT

please disable CORS in your browser in order to see the full functionality on this development app. I do not have control for flickr 
to provide allow-access-origin *

## API URL CONFIG

flickr was not working with my api key that I generated myself. In order for the request to be made,
please go to 'https://www.flickr.com/services/api/explore/flickr.photos.getRecent'.

Scroll down to where it says output and change to JSON.
Click Call Method
Underneath the given output, please copy and paste that url into the variable named 'url' 
in <rootDir/>/src/actions/flickrActions

This is because the api credentials that were given to me by flickr do not work and other have been experiencing these issues as well.

This is a random photo stream by flickr and I do not have control over which photos will be shown, therefore
please disregard any NSFW photos. Thank you

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

