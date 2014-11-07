# Using Selenium to run javascript tests

Examples of the different ways selenium can be used to test your javascript in the browser

There is a dedicated package.json in each folder. Only the webdriverjs-tape-remoteIE needs selenium server needs the selenium server to be run before executing. The rest of the examples you can simply run these commands to see it in action:

	npm install
	npm test

## Karma Test Runner (for unit tests)

Karma is a test runner JS unit tests. I keep the examples simple, but there are a number of launchers (Chrome, phantomjs, browserstack, etc). You can see them all [here](https://npmjs.org/browse/keyword/karma-launcher).


## Protractor/Webdriverjs (for end-2-end tests)

Webdriverjs is just nodejs wrappings of selenium methods. Protractor is built ontop of webdriverjs specifically for angularjs apps. The protractor example shows an example of taking screenshots.
