function getLatestMessages(searchTerm, callback, errorCallback) {
  var searchUrl = 'https://ajax.googleapis.com/ajax/services/search/images' +
    '?v=1.0&q=' + encodeURIComponent(searchTerm);
  var x = new XMLHttpRequest();
  x.open('GET', searchUrl);
  // The Google image search API responds with JSON, so let Chrome parse it.
  x.responseType = 'json';
  x.onload = function() {
    // Parse and process the response from Google Image Search.
    var response = x.response;
    if (!response || response === 0) {
      errorCallback('No response from Google Image search!');
      return;
    }
  };
  x.onerror = function() {
    errorCallback('Network error.');
  };
  x.send();
}

document.addEventListener('DOMContentLoaded', function() {
    //1. First we want to check if the user is logged in and return a user ID
	var userstatus = getUserId();
	
    //2. If they arent we want to return a button for the to click on to send them to the website
	if (userstatus == false ){	
	
    }else{
        //3. If they are we want to get the last couple of messages from the chat
		getLatestMessages();
	}
	//4. If they post a message we want to make call an api call updating it
    //5. We then want to call step 3 again so that they can see their messages as well
	
});
