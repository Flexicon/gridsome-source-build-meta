# @flexicon/gridsome-source-build-meta

Gridsome source plugin to add build information to the global metadata schema.

## Install

- `yarn add @flexicon/gridsome-source-build-meta`
- `npm install @flexicon/gridsome-source-build-meta`

## Usage

```js
module.exports = {
  plugins: [
    {
      use: '@flexicon/gridsome-source-build-meta',
      options: {
        formatLocale: 'en-US',
      },
    },
  ],
}
```

## Options

#### formatLocale

- Type: `string` _optional_

What locale to use with [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat)

Default: `en-GB`

#### formatOptions

- Type `object` _optional_

DateTime formatting options

Default:

```js
const formatOptions = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}
```

## Metadata

- `buildInfo`
  - `buildTime` - `string` - Date time string formatted based on the options and generated at build time
  - `buildTimestamp` - `number` - UNIX timestamp at which the current build was triggered


## Example Query

```graphql
<static-query>
  metadata {
    buildInfo {
      buildTime
      buildTimestamp
    }
  }
</static query> 
```
