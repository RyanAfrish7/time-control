#time-control


This npm package can be used to configure system time from node.js

It operates based on Javascript Promises for easier asynchronous handling. It consists of a single function `setTime`. 

Currently only Linux is supported. 

##Usage

```javascript
const timeControl = require('time-control');

var date = new Date('November 18, 1996 11:01:00');

timeControl.setTime(date).then(function() {
	// here comes your code
});
```

Note that the above function **requires superuser privileges**. Also note that this function will not perform as expected if time is automatically synchronized over the Internet.