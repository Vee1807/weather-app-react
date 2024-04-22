# Weather App

This is a simple weather app built with React. It allows users to check the current weather conditions, 3-day forecasts, and hourly breakdowns for different locations.

Check out the demo [here](https://vanykardjikian.github.io/weather-app-react/).

## Features
- Automatically display weather for the user's current location.
- View current weather conditions, 3-day forecasts, and hourly breakdowns for any city.
- Search for cities with autocomplete suggestions.
- Toggle between light and dark mode (user preference stored in local storage).
- Smooth animations when expanding forecast sections.



## Installation

To run the app locally, follow these steps:

1. Clone this repository:

    ```
    git clone https://github.com/vanykardjikian/weather-app-react.git
    ```

2. Navigate to the project directory:

    ```
    cd weather-app-react
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Start the development server:

    ```
    npm run dev
    ```

5. Open http://localhost:5173/weather-app-react in your browser to view the app.

## Usage

- Enter the name of a city or part of it in the search bar, then select it to view the current weather conditions and the 3-day forecast for that city.
- Toggle between light and dark mode using the theme switcher button.
- Expand the forecast sections and click on *See hourly* to view hourly weather breakdown.
- The app automatically fetches and displays the weather for the user's location upon page load or reload.


## Technologies Used

- React
- React Router
- Node.js (for development environment)
- Weather API
- Tailwind CSS

## Credits

- Weather data provided by [Weather API](https://www.weatherapi.com/)
