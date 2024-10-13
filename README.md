<p align="center">
  <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 27.2.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg width=200 version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 722.6 515.8" style="enable-background:new 0 0 722.6 515.8;" xml:space="preserve">
<style type="text/css">
	.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#EF4444;}
</style>
<path class="st0" d="M0.9,117.6c0,0,70.9-9.1,70.9,82.4S67,646.4,596,464.8c0,0-140.5-10.7-197-75.1c0,0,132.9-5.5,190.8-189.4
	S722.6,36,722.6,36S481.4-56.3,364.8,54.6S260.2,174.1,219.8,157S156.5,39.3,71.6,47S0.9,117.6,0.9,117.6z"/>
</svg>
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
