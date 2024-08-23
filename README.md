PWA Text Editor

## Overview
This project is a Progressive Web App (PWA) that provides a basic text editor with offline and online capabilities.

## Features
- **Offline Functionality:** The app can be used offline, with changes being saved locally and synchronized once the connection is restored.
- **IndexedDB Integration:** Uses IndexedDB to store and retrieve data for offline use.
- **Service Worker Caching:** Implements a service worker to cache assets such as images, script and css files, ensuring a smooth user experience even when offline.
- **Manifest File:** Includes a manifest file that allows users to install the app on their devices, providing a native app-like experience.

## Installation
To run this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash git clone https://github.com/amritank/pwa.git```
  
2. **Navigate to the Project Directory:**
  ```bash cd pwa```

3. **Install Dependencies:**
  ```bash npm install```

5. **Start the Development Server:**
  ```bash npm run start```

## Usage
Running Locally:

After starting the development server, open your browser and navigate to http://localhost:3000.
You can now start using the text editor, which will work both online and offline.
The data entered in the text editor is stored in the jate_db database using IndexedDB.
This data can be inspected via the Developer Tools in the Application tab under IndexedDB.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
