[![npm](https://img.shields.io/npm/v/nativescript-liquid-loader.svg)](https://www.npmjs.com/package/nativescript-liquid-loader)
[![npm](https://img.shields.io/npm/dt/nativescript-liquid-loader.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-liquid-loader)

# NativeScript-Liquid-Loader
Nativescript plugin for a slick liquid loading animation.

*Android Only - API 18+*

## Sample

![Demo](./screens/demo.gif)

#### Native Library
[LiquidButton](https://github.com/yoruriko/LiquidButton)

### Installation
From your command prompt/termial go to your app's root folder and execute:

`tns plugin add nativescript-liquid-loader`

## Usage
#### XML:
```XML
<Page 
  xmlns="http://schemas.nativescript.org/tns.xsd" 
  xmlns:LiquidLoader="nativescript-liquid-loader" 
  loaded="pageLoaded">
  <ActionBar title="Liquid Loader" />
  <StackLayout>

    <LiquidLoader:LiquidLoader id="liquidLoader" height="400" pourFinish="{{ pourFinished }}" />

    <Button text="Start Animation" tap="{{ startThePour }}" />

  </StackLayout>
</Page>

```

## API

- **startPour()** - Starts the animation.
- **pourFinish()** - Event executed when the animation finishes.