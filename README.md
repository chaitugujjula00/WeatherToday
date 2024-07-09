# WeatherToday

WeatherToday is a mobile application built with Expo and React Native. It provides current weather information using the free WeatherAPI (https://www.weatherapi.com/).

## Features

- Display current weather information for the user's location.
- Simple and intuitive user interface.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js (https://nodejs.org/)
- You have installed Expo CLI (https://docs.expo.dev/get-started/installation/)
- You have obtained a WeatherAPI key (https://www.weatherapi.com/)

## Installation

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```sh
git clone https://github.com/chaitugujjula00/WeatherToday.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies by running:

```sh
npm install
```

### 3. Add Your WeatherAPI Key

To fetch weather data, you need to add your WeatherAPI key. Follow these steps:

1. Open the `index.js` file located in the `constants` folder.
2. Replace the placeholder `'YOUR_API_KEY'` with your actual WeatherAPI key:

    ```js
    export const apiKey = 'YOUR_API_KEY';
    ```

## Running the Application

### 1. Start the Expo Server

Start the Expo development server by running:

```sh
expo start
```

This command will open the Expo DevTools in your browser.

### 2. Open the Application on Your Phone

To view the application on your mobile device, follow these steps:

1. Download the Expo Go app from the App Store (iOS) or Google Play Store (Android).
2. Open the Expo Go app on your device.
3. Scan the QR code displayed in your terminal or Expo DevTools using the Expo Go app. The application will load on your device.

## Usage

When you open the app for the first time, you will be prompted to grant location access. This is necessary to provide weather information for your current location. Once the location is obtained, the app will display the current weather information, including temperature, weather conditions, and more.

## Project Structure

The project is organized as follows:

- `components/` - Contains reusable UI components.
- `screens/` - Contains screen components for different app views.
- `constants/` - Contains constant values such as API keys and URLs.
- `assets/` - Contains images, icons, and other static assets.

## Expo Commands

Here are some useful Expo commands:

- `expo start` - Starts the development server.
- `expo build:android` - Builds the app for Android.
- `expo build:ios` - Builds the app for iOS.
- `expo publish` - Publishes the project to Expo.

## Troubleshooting

If you encounter any issues while setting up or running the application, try the following:

- Ensure you have the latest version of Node.js and Expo CLI installed.
- Check that your WeatherAPI key is correct and valid.
- Make sure you have granted location access permissions to the app.

## Contributing

Contributions are welcome! To contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Contact

For any inquiries, please contact [chaitanyareddygujjula@example.com].