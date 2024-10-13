<p align="center">
  <img src="https://github.com/guvercinjs/.github/blob/main/guvercin.svg" width="200">
</p>

# Guvercin

Guvercin (Turkish word for "dove", pronounced `/ɡyverˈdʒin/`) is a very simple logger library for Node.js.

## Installation

```bash
npm i guvercin
```

## Usage

```javascript
import { Guvercin } from "guvercin";

const guvercin = new Guvercin({
  enabled: true;
  showTime: true;
  saveToLocal: boolean;
  logFilePath: "./logs";
  separator?: "#";
  name?: "Logger";
  scope?: "users-controller";
});

guvercin.debug("This is a debug message");
guvercin.error("This is an error message");
guvercin.info("This is an info message");
guvercin.success("This is a success message");
guvercin.warning("This is a warning message");
```
