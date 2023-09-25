<p align="center">
  <img src="https://github.com/guvercinjs/.github/blob/main/guvercin.svg" width="200">
</p>

# Guvercin

Guvercin (Turkish word for "dove", pronounced `/ɡyverˈdʒin/`) is a very simple logger library for Node.js.

## Installation

<!-- ```bash
pnpm install guvercin
``` -->

```bash
npm install https://github.com/guvercinjs/guvercin
```

## Usage (CommonJS)

```javascript
const { Guvercin } = require('guvercin')

const guvercin = new Guvercin({
  hideTime: true, // Is time hidden in logs?
  timeFormat: 'DD/MM/YYYY HH:mm:ss', // Moment.js format
  saveToLocal: true, // Is logs saved to local?
  jsonOutput: true, // Is logs saved as JSON?
  logPath: './logs.json', // If saveToLocal is true, logs will be saved to this path
  separator: '@', // Separator between log type, log message and time
})

guvercin.error('This is an error message')
guvercin.warning('This is a warning message')
guvercin.info('This is an info message')
guvercin.success('This is a success message')
guvercin.debug('This is a debug message')
```

## Usage (ES6)

```javascript
import { Guvercin } from 'guvercin'

const guvercin = new Guvercin({
  hideTime: true, // Is time hidden in logs?
  timeFormat: 'DD/MM/YYYY HH:mm:ss', // Moment.js format
  saveToLocal: true, // Is logs saved to local?
  jsonOutput: true, // Is logs saved as JSON?
  logPath: './logs.json', // If saveToLocal is true, logs will be saved to this path
  separator: '@', // Separator between log type, log message and time
})

guvercin.error('This is an error message')
guvercin.warning('This is a warning message')
guvercin.info('This is an info message')
guvercin.success('This is a success message')
guvercin.debug('This is a debug message')
```

## guvercin.config.json

You don't have to pass options to Guvercin constructor. You can create a `guvercin.config.json` file in your project root and pass options to Guvercin from there.

```json
{
  "hideTime": true,
  "timeFormat": "DD/MM/YYYY HH:mm:ss",
  "saveToLocal": true,
  "jsonOutput": true,
  "logPath": "./logs.json",
  "separator": "@"
}
```

**NOTE:** If you pass options to Guvercin constructor, they will override the options in `guvercin.config.json`.
