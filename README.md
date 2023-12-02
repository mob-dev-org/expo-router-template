<br />

<h1 align="center">Expo template</h1>

<br />
<p align="center">Our Recommended template for Expo projects.</p>
<br />

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<hr>

All of the changes by version can be found in [CHANGELOG](./CHANGELOG.md).

<details>
<summary>Prerequisites</summary>

<!-- ## Prerequisites -->

[Expo development environment on your machine](https://reactnative.dev/docs/environment-setup)

Install globally on your device [expo cli](https://reactnative.dev/docs/environment-setup)

```shell
npm install -g expo-cli
```

<!-- - [environments](./.env.example) - get in contact with someone from team who has access to this [drive folder](https://drive.google.com/drive/folders/1RZOoRQi2zdLyTOe-Mapj1r-hHw2xWTsM?usp=sharing), there you will find urls for both env's in the sheet
![Environment files](./__readme-images/environments.png 'Environment files') -->

</details>

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<details>
<summary>Create new project</summary>

```shell
expo init -t '@mob.dev/expo-router-template' --no-install
```

```shell
cd Your_Project_Name
```

</details>

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<details>
<summary>Folder structure</summary>

### Folder: root

- `api`: Generated files from backend. Typescript types and hooks to call api
- `app`: Expo router
- `src`: Source folder that contains whole app logic and UI
  - `assets`:
    - `icons`: svg files that are transformed into React Native components
    - `images`: png files
  - `components` - done by standard of [atomic design](https://blog.logrocket.com/atomic-design-react-native/):
    - `atoms`: smaller UI components that do one thing
    - `molecules`: UI components that consist of multiple atoms
  - `hooks`: custom hooks that can be used throughout the app
  - `stores`: custom stores for zustand
  - `utils`: some constants used throughout the app - `constants`: some constants used throughout the app - `helpers`: some helper functions used throughout the app
  <!-- - `navigation`: configuration for navigation
  - `screens`: screens, used in navigation, and they contain logic and layout
  - `store`: redux store for global storage, also is persisted for offline storage. For persisting data it uses secure storage -->

</details>

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<details>
<summary>Running the app</summary>

Install packages

```shell
yarn
```

To start local metro server with JS code bundled

```shell
yarn start
```

(if you don't start it, one of the yarn ios/android commands will do it for you before installing the app to your device/simulator)

```shell
yarn android
```

```shell
yarn ios
```

Triggering command to create development build in Expo EAS services that can be installed on simulator

```shell
yarn ios:createDevelopmentBuildForSimulator
```

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<!-- <hr>
<details  >
<summary >Multiple environments for notifications (Dev & Production)</summary>

Multiple environmets serve a purpose of creating 2 instances of this app, one for development and other one for production.

The only difference currently is using multiple firebase projects for notification feature.

But soon if not already, there are going to be multiple environments with different URL values, and development build with `Storybook` integrated insisde app

This is to make sure that real users do not receive notifications from development team.

## Android

![Alt text](./__readme-images/android-variants.png 'SDK')

## iOS

![Alt text](./__readme-images/ios-variants.png 'SDK')

## Resources:

https://dev.to/kpiteng/manage-multiple-firebase-projects-in-react-native-2322
https://medium.com/@ywongcode/building-multiple-versions-of-a-react-native-app-4361252ddde5

If there is need to setup appcenter for using DEV firebase:

https://medium.com/@gregoire.frileux/how-to-manage-multiple-environments-dev-staging-prod-for-firebase-with-react-native-app-205c7c1a5e35

Firebase files (google services/info) can be downloaded from firebase console:

https://console.firebase.google.com/u/0/project/razvrstaj-mojzg-dev/overview
https://console.firebase.google.com/u/0/project/razvrstaj-mojzg-e34e4/overview

</details>

<details>
<summary>Android</summary>

Assuming you are lucky and everything from prerequisites is setup correctly, these commands will install the app.

If you want to run app on a real Android device you should install
[adb](https://developer.android.com/studio/command-line/adb). Connect the device with cable, enable development mode on it once and

Run command below to create connection between laptop and device (if you are running on simulator, you can skip this step)

```shell
adb reverse tcp:8081 tcp:8081
```

once it is connected you can run one of these

```shell
yarn android:dev:debug
```

```shell
yarn android:dev:release
```

```shell
yarn android:prod:debug
```

```shell
yarn android:prod:release
```

One of the issues that might occur is path to the android sdk, it can be solved by adding local properties with a path to the sdk (image below is for MacOS and you should copy the path just change the username, username can be obtained by running `whoami` command in terminal)
![Alt text](./__readme-images/android-local-props.png 'SDK')

</details>

<details >
<summary >iOS</summary>

### iOS

If you wish to start app on iOS simulator/device go

```shell
npx pod-install
```

this will install packages from `Podfile` (equivalent to package.json in react-native) with cocoapods, this will create `.xcworkspace` file.

With Xcode open .xcworkspace file and from here you can start an app -->

<!-- , or if you prefer terminal, it can be started with `yarn ios` -->

<!-- One thing to keep an eye on, project needs to be signed with a Team (Personal, or the one company provides you with) before it can be run, otherwise it will throw an error during building phase

![Alt text](./__readme-images/xcode.png 'Xcode')

To start `development` environment with development URL and firebase config (so you can recieve notifications from development server) you need to select `RazvrstajMojZG-Development` scheme in `Xcode`

![Alt text](./__readme-images/development-scheme.png 'RazvrstajMojZG-Development')

</details>
<hr> -->
</details>

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->
<!-- <details>
<summary>Testing the app</summary>

- [Testing guides](https://reactnativetesting.io/)
- [e2e tests](https://wix.github.io/Detox/docs/introduction/how-detox-works)

  - iOS
    - Debug
      - build `yarn e2e:ios:build`
      - then `yarn e2e:ios:run`
      - single test: example `TEST_PATH=profile.e2e.ts yarn e2e:ios:run:single:test`

If you want to watch for file changes and it reruns tests use flag `--watch`

- [unit tests](https://jestjs.io/)
  - Active development of tests, watch files for changes and re-runs all tests
    - `npx yarn test`
  - Debug, console.logs and only re-runs the file that was changed
    - `npx yarn testDebug`
  - Displays code coverage in cli and updates the code coverage html
    - `npx yarn testFinal`
  - When a screen/component is updated, the test snapshots will throw an error, this updates them
    - `npx yarn updateSnapshots`

</details> -->
<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<details>
<summary>Commiting</summary>

In this project going forward we will use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) as a new standard.

In addition we will follow [semantic versioning](https://semver.org/).

This is so we can easily generate new changelog.

- `Commiting`:
  - `git commit`: This will run CLI interface to easily create commit messages that follow conventional commits logic
  - `commitizen`: It will guide you and prompt you options to choose from so you follow the standard. At the end it will open the editor in terminal with your commit message. All you have to do is type in `:q` to exit and save
- `Generate CHANGELOG.md` from your commits that follow conventional standard:
  - Library used [commit-and-tag-version](https://www.npmjs.com/package/commit-and-tag-version) which is a fork of [standard-version](https://www.npmjs.com/package/standard-version):
  - To bump up the version in package.json version of this repo and generate changelog:
    - `yarn release:patch`: (0.0.X)
    - `yarn release:minor`: (0.X.0)
    - `yarn release:major`: (X.0.0)

</details>
<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<details>
<summary>Generate CHANGELOG.md</summary>

- `Generate CHANGELOG.md` from your commits that follow conventional standard:
  - Library used [commit-and-tag-version](https://www.npmjs.com/package/commit-and-tag-version) which is a fork of [standard-version](https://www.npmjs.com/package/standard-version):
  - To bump up the version in package.json version of this repo and generate changelog:
    - `yarn release:patch`: (0.0.X)
    - `yarn release:minor`: (0.X.0)
    - `yarn release:major`: (X.0.0)

</details>

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<details>
<summary>Making sure that the code is written by standards</summary>

[`Check this blog`](https://dev-yakuza.posstree.com/en/react-native/eslint-prettier-husky-lint-staged/#eslint)

- `ESlint`
- `Prettier`
- `Husky`

</details>

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<details>
<summary>Generate production version</summary>

<!-- These are the steps to generate `.apk`, `.aab` and `.ipa` files -->

### Android

Creates APK file in expo

```shell
yarn android:releaseToExpo
```

Creates AAB file

```shell
yarn android:prepareForGooglePlay
```

<!-- First you need to bump up the version of the app, so it does not have conflict with previous builds when uploading:

Go to `android/app/build.gradle`

```shell
versionCode 22
versionName "2.0"
```

Note: You have two options to generate the project

- `assemble:` Generates an `apk` that you can share with others.

  This is mostly used when you need to upload apk build to [Appcenter](https://appcenter.ms/orgs/Dept-CRO/apps/Razrvrstaj-MojZG/distribute/releases?parent=1), tool that makes it easier to share for testing to other people
  This is a [Public link](https://install.appcenter.ms/orgs/dept-cro/apps/razrvrstaj-mojzg/distribution_groups/public%20group) that can be shared with testers

  If you want access to this appcenter organization, contact Mateo or Mahir to add you in

```shell
cd android && ENVFILE=../.env.production ./gradlew assembleRelease && cd ..
```

- `bundle:` When you are uploading the app to the Play Store. This will generate `.aab`

```shell
cd android && ENVFILE=../.env.production ./gradlew bundleRelease && cd ..
```

For more info please go to https://reactnative.dev/docs/signed-apk-android

![Environment files](./__readme-images/android-builds.png "Environment files") -->

<!-- ### iOS

1. Go to the Xcode
2. Select the schema and target, then bump up the build number, if you previously released some version to production, then update the version number as well
   ![iOS build](./__readme-images/ios-build.png "iOS build")

3. Select 'Any iOS device' as target

   ![iOS build](./__readme-images/iOS-device-type.png "iOS device type")

4. Product -> Archive
   ![iOS archive](./__readme-images/ios-archive.png "iOS archive")

5. When archive is finished it will popup a window with that build, all you need to do is upload it, go next -> next until it is finished

For more info please go to https://reactnative.dev/docs/publishing-to-app-store -->

</details>

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<!-- <details>
<summary>Base dependencies</summary>
v1

- [axios](https://github.com/axios/axios) for networking.
- [typescript](https://www.typescriptlang.org/)
- [react-navigation](https://reactnavigation.org/) navigation library.
- [moment](https://momentjs.com/) date library
- [react-native-geolocation-service](https://www.npmjs.com/package/react-native-geolocation-service) to get users current location coordinates
- ... many more packages in package.json
- [jest](https://facebook.github.io/jest/) and [react-native-testing-library](https://callstack.github.io/react-native-testing-library/) for testing.
- [detox](https://wix.github.io/Detox/) for e2e testing.

v2

- [react-query](https://react-query-v3.tanstack.com/)
- [redux toolkit](https://redux-toolkit.js.org/) for global storage
- [redux-persist](https://github.com/rt2zz/redux-persist#readme) for offline global storage
- [vision-camera-code-scanner](https://www.npmjs.com/package/vision-camera-code-scanner) for barcode scanning


</details> -->

<!-- TODO: add all of other packages -->

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->

<!-- <details>
<summary>Icons</summary>

Svg's were downloaded from figma and added to the assets/icons folder

We are using transformer to use them as components in the code - [SVG transformer](https://www.npmjs.com/package/react-native-svg-transformer).

- Add new icons:
  - `download from figma` - 24x24 as svg
  - `add it in the folder`
  - `import it in designSystem/atoms/Icon/index.tsx`

</details> -->

<!-------------------------------------------------------------------->
<!-------------------------------------------------------------------->
