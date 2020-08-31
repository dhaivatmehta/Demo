// START background color
function backgroundColor(e, component){
	getDom(component).style.backgroundColor = e.value;
}
// END background color

// START text color
function textColor(e, component, tag){
	var colorValue = e.value;
	if(tag){	// TODO: find better way
		var elements = getDom(component, tag);
    	for (var i = 0; i < elements.length; i++) {
			elements[i].style.color = colorValue;
		}
	} else {
		getDom(component).style.color = colorValue;
	}
}
// END text color

// START text size
function fontSize(e, component){
	getDom(component).style.fontSize = e.options[e.selectedIndex].value;
}
// END text size

// START font family
function fontFamily(e, component, tag){
	var fontValue = e.options[e.selectedIndex].value;
	if(tag){	// TODO: find better way
		var elements = getDom(component, tag);
    	for (var i = 0; i < elements.length; i++) {
			elements[i].style.fontFamily = fontValue;
		}
	} else {
		getDom(component).style.fontFamily = fontValue
	}
}
// END font family

// START font styling
function fontBold(e, component, tag){
	var cssStyle = 700;

	if(tag){	// TODO: find better way
		var elements = getDom(component, tag);
    	for (var i = 0; i < elements.length; i++) {
    		var element = elements[i].style;
    		if(element.fontWeight == cssStyle){
				element.fontWeight = '';
    		}else{
				element.fontWeight = cssStyle;
    		}
		}
	} else {
		var element = getDom(component).style;
		if(element.fontWeight == cssStyle){
			element.fontWeight = '';
		} else {
			element.fontWeight = cssStyle
		}
	}

	resetSelected(e);
}

function fontItalic(e, component, tag){
	var cssStyle = 'italic';

	if(tag){	// TODO: find better way
		var elements = getDom(component, tag);
    	for (var i = 0; i < elements.length; i++) {
    		var element = elements[i].style;
    		if(element.fontStyle == cssStyle){
				element.fontStyle = '';
    		}else{
				element.fontStyle = cssStyle;
    		}
		}
	} else {
		var element = getDom(component).style;
		if(element.fontStyle == cssStyle){
			element.fontStyle = '';
		} else {
			element.fontStyle = cssStyle
		}
	}

	resetSelected(e);
}

function fontSmallCaps(e, component, tag){
	var cssStyle = 'small-caps';

	if(tag){	// TODO: find better way
		var elements = getDom(component, tag);
    	for (var i = 0; i < elements.length; i++) {
    		var element = elements[i].style;
    		if(element.fontVariant == cssStyle){
				element.fontVariant = '';
    		}else{
				element.fontVariant = cssStyle;
    		}
		}
	} else {
		var element = getDom(component).style;
		if(element.fontVariant == cssStyle){
			element.fontVariant = '';
		} else {
			element.fontVariant = cssStyle
		}
	}
	resetSelected(e);
}

function fontUnderline(e, component, tag){
	var cssStyle = 'underline';

	if(tag){	// TODO: find better way
		var elements = getDom(component, tag);
    	for (var i = 0; i < elements.length; i++) {
    		var element = elements[i].style;
    		if(element.textDecoration == cssStyle){
				element.textDecoration = '';
    		}else{
				element.textDecoration = cssStyle;
    		}
		}
	} else {
		var element = getDom(component).style;
		if(element.textDecoration == cssStyle){
			element.textDecoration = '';
		} else {
			element.textDecoration = cssStyle
		}
	}

	resetSelected(e);
}

function resetSelected(e){
	var cssCls = 'selected';
  	if (e.classList.contains(cssCls)) {
    	e.classList.remove(cssCls);
  	} else {
		e.classList.add(cssCls);
  	}
}
// END font styling

// START render image locally at target and current position
function previewImage(e, control, component){
 	var ctrlImg = getDom(control),
 		cmpImg = getDom(component);

   	if(ctrlImg && cmpImg){
 	    var files = e.target.files[0],
 	    	reader = new FileReader();

 		reader.onload = (function(theFile) {
 		    var image = new Image();
 		    image.src = theFile.target.result;

 		    image.onload = function() {
 		        // if(this.width == cmpImg.width && this.height == cmpImg.height){
 					ctrlImg.src = this.src;
 	 				cmpImg.src = this.src;
 		        // }else{
 		        	// alert("Sorry, " + e.target.name + "'s width and height not as expected.");
 		        // }
 		    }
 		})
 		reader.readAsDataURL(files);
   	} else {
 		alert("Sorry, Please contact support. error code: EPM");
   	}
}
// END render image locally at target and current position

// START get dom
function getDom(id, tag){
	if(tag){
		return document.getElementById(id).getElementsByTagName(tag);
	} else {
		return document.getElementById(id);
	}

}
// END get dom
