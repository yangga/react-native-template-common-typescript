# :space_invader: React Native Template "Common" TypeScript

<p>
  <a href="https://github.com/yangga/react-native-template-common-typescript/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> Common style React Native (with expo) template for a quick start with TypeScript.

## :star: Features

> It contains ['expo-template-bare-typescript'](https://github.com/expo/expo/tree/master/templates/expo-template-bare-typescript) and then,

- splash screen with sample centered logo
- multi language (also localized app name)
- main frame - 3 Popular layout styles : [Left menu, Bottom tabbar, Stackable]
- redux - with react-context
- module-resolver - accessing files by absolute path
- importing images without typescript warning - refers to 'typings' folder

[> more](template/README.md)

## :arrow_forward: Usage

### Note on the legacy CLI

There seems to be quite some confusion about the legacy CLI. This template only works with the new CLI. Make sure you have uninstalled the legacy `react-native-cli` first (`npm uninstall -g react-native-cli`), for the above command to work. If you wish to not use `npx`, you can also install the new CLI globally (`npm i -g @react-native-community/cli` or `yarn global add @react-native-community/cli`).

Further information can be found here: https://github.com/react-native-community/cli#about

### `react-native@0.61.0` or higher

```sh
npx react-native init MyApp --template react-native-template-common-typescript
```

### `react-native@0.60.x`

n/a

## :computer: Contributing

Contributions are very welcome. Please check out the [contributing document](CONTRIBUTING.md).

## :bookmark: License

This project is [MIT](LICENSE) licensed.
