# PROTRACTOR
Program to test an ANGULARJS website using PROTRACTOR,JASMINE using node

## Requirements
npm
Google chrome browser

## Setting things up

INSTALL PROTRACTOR AND JASMINE
```sh
npm install -g protractor
npm install –g jasmine-reporters@^2.0.0
```

## Firing it

START THE SELENIUM WEB DRIVER (USING NODE CMD)
```sh
webdriver-manager start
protractor configuration.js
```

## INFO

You need to change the node_modules path in the configurations.js file
and the Xpath in case you are testing another website.

Open http://localhost:4444/wd/hub/static/resource/hub.html for monitoring multiple tests.
