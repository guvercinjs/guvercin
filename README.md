<p align="center">
  <img src="https://github.com/guvercinjs/.github/blob/main/guvercin.svg" width="200">
</p>

# Guvercin

Guvercin (Turkish word for "dove", pronounced `/ɡyverˈdʒin/`) is a very simple logger library for Node.js.

## Installation

```bash
pnpm install guvercin
```

## Usage (CommonJS)

```javascript
const { Guvercin } = require('guvercin')

const guvercin = new Guvercin({
  hideTime: true,
  logPath: './logs.log',
  saveToLocal: true,
  separator: '@',
  timeFormat: 'DD/MM/YYYY HH:mm:ss',
  name: 'BACKEND',
})

guvercin.debug('This is a debug message')
guvercin.error('This is an error message')
guvercin.info('This is an info message')
guvercin.success('This is a success message')
guvercin.warning('This is a warning message')
```

## Usage (ES6)

```javascript
import { Guvercin } from 'guvercin'

const guvercin = new Guvercin({
  hideTime: true,
  jsonOutput: true,
  logPath: './logs.log',
  saveToLocal: true,
  separator: '@',
  timeFormat: 'DD/MM/YYYY HH:mm:ss',
  name: 'BACKEND',
})

guvercin.debug('This is a debug message')
guvercin.error('This is an error message')
guvercin.info('This is an info message')
guvercin.success('This is a success message')
guvercin.warning('This is a warning message')
```

## guvercin.config.json

You don't have to pass options to Guvercin constructor. You can create a `guvercin.config.json` file in your project root and pass options to Guvercin from there.

```json
{
  "hideTime": true,
  "logPath": "./logs.log",
  "saveToLocal": true,
  "separator": "@",
  "timeFormat": "DD/MM/YYYY HH:mm:ss",
  "name": "FRONTEND"
}
```

**NOTE:** If you pass options to Guvercin constructor, they will override the options in `guvercin.config.json`.
