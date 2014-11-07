define(["./app"], function(App) {

	describe("Test", function() {
		
		it("can pull text from elements", function() {

			expect(App.getText("<div> Hello </div>")).to.equal("Hello");		
			
		});
		
	});
	
});