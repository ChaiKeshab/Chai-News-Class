# CHAI News

CHAI News is a news app that provides the latest news articles on various topics. Stay updated with the latest news from around the world!

Designed using Class component (cuz i was learning class component)

BTW, I have purposely set the article limit to 100 cuz more than that requires going to next page, which requires another api call?. Was trying to save my remaining api calls but now that i think about it... It was unnecessary. Anyway, removing the limiter just needs some tinkering with the Infinite-scroll which is currently being used to limit the article to 20 per page render, Scroll to bottom to get 20 more until end of page 

## Features

- Get the latest news articles on various topics.
- Read detailed news articles with images and descriptions.
- Stay informed with real-time news updates.

## API Provider

This app utilizes the News Catcher API for fetching news data. The News Catcher API provides a wide range of news articles from different sources. You can find more information about the API and its usage [here](https://newscatcherapi.com/).

## Installation

To run the CHAI News app locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`

Make sure you have Node.js and npm installed on your machine.

## Technologies Used

- React.js: JavaScript library for building user interfaces.
- Axios: Promise-based HTTP client for making API requests.
- CSS: Styling the app for an enhanced user experience.

## Contributing

Contributions are welcome! If you'd like to contribute to the CHAI News app, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push the branch: `git push origin feature-name`
5. Submit a pull request.

## License

The CHAI News app is open-source and available under the [MIT License](LICENSE).
