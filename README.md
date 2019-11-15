# react-mobile-only
A react component that will only display its children on mobile resolutions.

## Installation
The `react-mobile-only` package is available from NPM via `yarn` or the `npm` CLI.

```
npm i --save react-mobile-only
```

## Usage
The component can be used by wrapping child components to restrict their display to mobile devices.

```js
import MobileOnly from 'react-mobile-only'

const AppBanner = (props) => (
  <MobileOnly>
    Download our app from the <a href={app.play_store_url}>Play Store</a> or the <a href={app.app_store_url}>App Store</a>.
  </MobileOnly>
)
```

By default, the component will display for screen resolutions below 768px. By passing a `mobileSize` prop to the component, or by setting `theme.mobileSize` in the [styled-components](https://www.styled-components.com/docs/advanced#theming) theme.

## Related

See [react-desktop-only](https://github.com/lukem512/react-desktop-only)

## License

MIT
