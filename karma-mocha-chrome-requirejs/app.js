define(["jquery"], function($) {
	return {
		getText: function(element) {
			return $.trim($(element).text());
			
		}
	}
	
});