
This example requires setting up selenium on another server/VM. First run the selenium server on the remote machine:

	wget http://selenium-release.storage.googleapis.com/2.44/selenium-server-standalone-2.44.0.jar
	java -jar selenium-server-standalone-2.44.0.jar
	
	.. or ..
	
	npm install selenium-server -g
	selenium &

Then update test.js to have the correct host.