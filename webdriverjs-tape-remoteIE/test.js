var webdriverio = require('webdriverio'),
	test = require('tape');


test('my webdriverio tests', function(t) {

	t.plan(1);

    var client = {};

	client = webdriverio.remote({
		desiredCapabilities: {
	        'browser': 'internet explorer',
	        'browser_version': '10.0'
		},
		host: 'spn-w7.wesad.wesleyan.edu'
	});

	// Uncomment this line to run firefox on the localhosthost, STILL require selenium to be run
	//	client = webdriverio.remote({desiredCapabilities: {browserName: 'firefox'}});

    client.init();
				
    client
        .url('https://github.com/')
        .getTitle(function(err, title) {
            t.equal(title,'GitHub · Build software better, together.');
        })
        .call(function() {
			client.end();
        });
});