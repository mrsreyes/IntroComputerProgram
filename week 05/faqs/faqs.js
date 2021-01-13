"use strict";
var $ = function(id) { return document.getElementById(id); };

// the event handler for the click event of each a element
var toggle = function() {
    var link = this;                             // the clicked a tag
	var h2 = link.parentNode;                    // h2 tag that returns parent node pg. 143     
    var div = h2.nextElementSibling;  // h2 tag returns a node object for the next sibling

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute("class")) { 
//        h2.removeAttribute("class");	
        h2.className = "";
    } else { 
//        h2.setAttribute("class", "minus"); 
        h2.className = "minus";
    }

    // toggle div visibility by adding or removing a class
    if (div.hasAttribute("class")) { 
//        div.removeAttribute("class");
        div.className = "";
    } else { 
//        div.setAttribute("class", "open"); 
        div.className = "open";
    } 
};

window.onload = function() {
    // get the a tags
    var faqs = $("faqs");
    var linkedElements = faqs.getElementsByTagName("a"); //pg145
    
    // attach event handler for each a tag	    
    for (var i = 0; i < linkedElements.length; i++ ) {
    	linkedElements[i].onclick = toggle;
    }
    // set focus on first <a> tag
    linkedElements[0].focus();       
};