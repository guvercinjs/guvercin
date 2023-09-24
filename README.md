# Guvercin

Guvercin (Turkish word for "dove", pronounced `/ɡyverˈdʒin/`) is a very simple logger library for Node.js.

## Installation

```bash
pnpm install guvercin
```

## Usage

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
