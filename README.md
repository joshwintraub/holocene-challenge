# Data Visualizer App


## To run the app:
1. Clone this repo into a new folder.
2. In the command line run `npm install` to install necessary depenencies.
3. Run `npm start` to build the webpack bundle file.
4. Go to `index.html` in the `/public` folder and open it using *Live Server* from your IDE (Atom, VS Code, Sublime, etc).

## To change the input (2D Array) data:
1. Go to `main.js` in the `/src` folder and find the comment on line 6. You can change the array [] called `data` on line 7.


### Functionality to Try:
* Add many more data points, by increasing the original `data` array (see above), and see how the table component grows.
* Once the table reaches 80% of the visual height of the screen, the user will be able to scroll within the table so see all values, as opposed to having to scroll down the page past the chart.
* Checkout the tooltips used! Hover over a data point to see which dataset it belongs to, as well as the exact x-y coordinates.

### Notes:
* This app was built using the open-source Chart.js library to display the chart, and React to allow for modular development of the table and chart elements.
* I built all of the components in the `/src` folder, as well as the `index.html` & `style.css` file for styling. No frameworks were used as a starting point to create the app.
* Webpack is used to comile the app into a `bundle.js` file.
* Please feel free to contact we if you have any questions.
