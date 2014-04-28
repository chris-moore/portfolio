function convertToNumber(str)
{
	var arr = str.split("px");
	return Number(arr[0]);
}

function getCenter(obj)
{
	var w = obj.css("width");
	var h = obj.css("height");
	
	var center = new Object();
	center.centerX = w/2;
	center.centerY = h/2;
	
	return center;
}

function centerItem(obj, x, y)
{
	obj.css("left", x - (convertToNumber(obj.css("width"))/2));
	obj.css("top", y - (convertToNumber(obj.css("height"))/2));
}

function getDims()
{
	var winWidth;
	var winHeight;
	var dims;
	
	
	if( typeof( window.innerWidth ) == 'number' ) {
		
		//Non-IE
		winWidth = window.innerWidth;
		winHeight = window.innerHeight;
		
	  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
		//IE 6+ in 'standards compliant mode'
		winWidth = document.documentElement.clientWidth;
		winHeight = document.documentElement.clientHeight;
	  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
		//IE 4 compatible
		winWidth = document.body.clientWidth;
		winHeight = document.body.clientHeight;
	  }
	  
	  dims = new Object();
	  dims.width = winWidth;
	  dims.height = winHeight;
	  
	  return dims;
}

function stripDuplicates(a) 
{
	if (a.length < 1) {
		return a;
	}
	var newArray = [];
	var len = a.length;
	for (var i = 0; i < len; i++) {
		var n = 0;
		for (var j = 0; j < newArray.length; j++) {
			if (newArray[j] == a[i]) {
				n++;
			}
		}
		if (n < 1) {
			newArray.push(a[i]);
		}
	}
	newArray.reverse();
	return newArray;
}

function validateEmail(email_address)
{
	var x = email_address;
	var atpos=email_address.indexOf("@");
	var dotpos=email_address.lastIndexOf(".");
	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length)
	{
		return false;
	} else {
		return true;
	}
}

function searchAndReplace(searchString, find, replace) 
{
	var tempArray = searchString.split(find);
	return tempArray.join(replace);
}

function sortByKey(array, key) 
{
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}

function truncateString(s, length, extension) 
{
	if (length >= s.length) {
		return s;
	}

	if (extension == null) 
	{
		extension = "";
	}

	if (s.substring(length - 1, length) == " ") 
	{
		return s.substr(0, length - 1) + extension;
	} else {
		return s.substr(0, length) + extension;
	}
}

function initialZero(num) {
	if(String(num).length <= 1) {
		return "0" + num;
	}
	
	return "" + num;
}









