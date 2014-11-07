var app = require("../app2");

describe("App2", function() {
	
	it("can add", function() {
		
		expect(app.add(1,1)).toBe(2);

	});
	
	it("can subtract", function() {
		
		expect(app.subtract(1,1)).toBe(0);

	});
	
});