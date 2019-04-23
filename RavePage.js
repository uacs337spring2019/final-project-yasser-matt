/* Name: Matthew Heger
    Class: CSC 337 
   Date: 4/14/2019
   This is the Javascript file for the mymdb CSC 337 Assignment  */

   "use strict";
   (function () {
    window.onload = function () {
    console.log("start"); 

    Fetch(); 
   };

   function Fetch() {
    let url = "http://u-crave-raves.herokuapp.com"; 

    fetch(url) //Start fetching description for description mode 
    .then(checkStatus)
    .then(function (responseText) {
    let text = JSON.parse(responseText); 
    console.log(text);
    let header = document.getElementById("test"); 
    header.innerHTML = text; 
    })
    .catch(function (error) {
    console.log(error); 
    });
   }

   function checkStatus(response) {    //Checks for errors on the page 
    if (response.status >= 200 && response.status < 300) {
        return response.text();
    } else if (response.status == 404) {    //404 error when there is no data
        return Promise.reject(new Error("sorry we do not have any data"));
    } else {
        return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
}

})();
   