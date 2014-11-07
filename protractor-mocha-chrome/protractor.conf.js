exports.config = {
	framework:'mocha',
	
	// Do not start a Selenium Standalone sever - only run this using chrome.
	directConnect: true,
	chromeDriver: './node_modules/chromedriver/bin/chromedriver',

	// Capabilities to be passed to the webdriver instance.
	capabilities: {
		'browserName': 'chrome'
	},

	// Spec patterns are relative to the current working directly when
	// protractor is called.
	specs: ['test.js']
};