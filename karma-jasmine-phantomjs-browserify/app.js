var moment = require("moment");

module.exports = {
	date: function() {
		return moment().format('L');
	},
	time: function() {
		return moment().format('h:mm:ss a');
	}
}