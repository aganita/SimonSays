# Simon Says built with React Native

## Requirements
- [Node](https://nodejs.org) `4.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.2` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation
- [Android Lollipop](https://www.android.com/versions/lollipop-5-0/) or newer on your Android device to test properly

See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.

## Stack
- [React Native](https://facebook.github.io/react-native/) `0.26.0` for building native apps using react
- 
## Make the awesome
Just clone the repo
and start :
```shell
$ git clone https://github.com/LeoLeBras/react-native-redux-starter-kit.git myAwesomeApp
$ cd myAwesomeApp
$ npm i                         # Install Node.js components listed in ./package.json
```

### How to use ?
```shell
$ npm start                     # or: node_modules/react-native/packager/packager.sh
```
This will start a lightweight development server.

###### iOS:
Open `App.xcodeproj` in Xcode, build and run the project.

###### Android:
```shell
$ npm run android-setup-port    # adb reverse tcp:8081 tcp:8080
```
Start your emulator or connect your device.

## Debugging
[Access the in-app developer menu](https://facebook.github.io/react-native/docs/debugging.html) and select ``Debug in Chrome``.

#### Run Reactotron
```shell
$ npm run reactotron
```

![](https://github.com/skellock/reactotron/blob/master/images/Reactotron.gif)

See the [Reacotron docs](https://github.com/skellock/reactotron) for more features.

## Create a release build
* Navigate to Product > Scheme > Edit Scheme... in Xcode and change Build Configuration to *Release*.
* Run in terminal :

###### iOS:
```shell
$ npm run build-ios
```
###### Android:
```shell
$ npm run build-android
```
To get to the developer menu on the ios emulator, just press Control-M inside the emulator screen.  Then, turn on hot reload.

To get to the developer menu on the android emulator, just press Control-M inside the emulator screen.  Then, turn on hot reload.

## Issues
If you run into any issues please see the [Getting Started](http://facebook.github.io/react-native/docs/getting-started.html) guide for React Native before submitting an issue.

