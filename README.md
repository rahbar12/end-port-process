## Install

```bash
$ npm install end-port-process
```

## Usage
```javascript
const portKill = require('end-port-process');

  // single port
  await portKill(1234);

  // multiple ports
  await portKill(1234, 6789);

  // Always returns array of killed port numbers: [1234]
```