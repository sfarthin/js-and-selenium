var path = require("path"),
	chai = require('chai'),
	chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

// Screenshot Helper
function ScreenShot(name) {
	browser.takeScreenshot().then(function (png) {
	    var stream = require('fs').createWriteStream(path.resolve(__dirname, "screenshots/"+name+".png"));
	    stream.write(new Buffer(png, 'base64'));
	    stream.end();	
	});
}

describe("App", function() {
	
	this.timeout(50000);
	
	it("can place an order", function() {

		browser.get('http://sfarthin.github.io/terzink-quote/');

		ScreenShot("1-start");

		$(".garment select option:nth-child(8)").click();

		ScreenShot("2-garment");

		$(".color-style select:first-child option:nth-child(2)").click();

		ScreenShot("3-type");

		$(".color-style select:nth-child(2) option:nth-child(18)").click();

		ScreenShot("4-color");

		$(".sizes div:nth-child(1) input").sendKeys("20");
		$(".sizes div:nth-child(2) input").sendKeys("10");

		ScreenShot("5-quantity");

		$(".placement label:nth-child(2) input").click();

		ScreenShot("6-placement");

		$(".numColors div:nth-child(1) option:nth-child(2)").click();

		ScreenShot("7-number-of-colors");

		$(".quote p:nth-child(4)").getText().then(function(msg) {
			expect(msg).to.equal("Total order price: $220.80");
			console.log(msg);
		})	
		
	});
	
});
