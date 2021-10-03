KLOOK
=========

Klook is a travel booking app which helps you to reservate a tour in all over the world.

**Note: this is a clone project which is used for submission in university. Any order will not be applied in the real life.**



Table of contents
=================


   * [Requirements](#requirements)
   * [Installation](#installation)
   * [Usage](#usage)
      * [npm start](#npm-start)
      * [npm run android](#npm-run-android)
      * [npm run ios](#npm-run-ios)
      * [npm run eject](#npm-run-eject)


Requirements
============
- [Git](https://git-scm.com/downloads)
- [Nodejs](https://nodejs.org/en/)
- [Expo](https://expo.io) 
- [Android Studio](https://developer.android.com/studio) (optional)

Installation
============

- **Clone project:**
   ```sh
   git clone ...
   ```

- **Install dependencies:**
   ```sh
   Yarn
   # or
   npm -i
   ```

Usage
=====

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

   ```sh
   npm start --reset-cache
   # or
   yarn start --reset-cache
   ```

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)