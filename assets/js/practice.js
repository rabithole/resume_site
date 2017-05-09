// JavaScript practice. 
// Grabs all the absolute links on a webpage. 


// Locates all the absolute links on the page. 
var absoluteLink = function Init() {
	var absoluteLinks = [];
	var aLinks = document.getElementsByTagName('a'); 

	// Grabs the current absolute URL and puts it into a variable as a string. 
	var currentURL = document.URL;
	var urlPosition = currentURL.search('.com' || '.gov' || '.org' || '.net');
	var urlString = currentURL.slice(0, urlPosition);

// Loops through all a tags and grabs the href property. 
	for (i = 0; i < aLinks.length; i++) {
		var aHref = aLinks[i].href; 
			// Finds absolute URL's and adds them to the absolutelinks[]. 
		if(aHref.includes(urlString) == false) { 
				absoluteLinks.push({
									aHref,
								})
			}
		// console.log(absoluteLinks.aHref); // Logs only the href property of absoluteLinks[]. 
	};

// Grabs the aHref string from the abosuluteLinks[]. 
	for (i = 0; i < absoluteLinks.length; i++) {
			console.log(absoluteLinks[i].aHref);
		} 

	console.log(typeof aHref);
	console.log(aHref.length);
	 console.log(absoluteLinks)

	
};

 alert('Here are the absolute links.\n ' + 'absoluteLinks' + '\n')
		