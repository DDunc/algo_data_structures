
//shortening the length to remove the last element, saving it beforehand to return it
Array.prototype.myPop = function(){
	var TBR = this[this.length-1];
	this.length = this.length-1;
	return TBR;
}

//if we can't use splice...
Array.prototype.myShift = function(){
	var TBR = this[0];
	for(var i = 0; i < this.length; i++){
		this[i] = this[i + 1];
	}
	this.length = this.length - 1;
	return TBR;
}

//single argument only, will ask about on tuesday ;(
Array.prototype.myUnshift = function(item){
	var i;
	for (i = this.length -1; i >= 0; i--){
		this[i+1] = this[i]
    }
	this[0] = item;
	return this.length;
}

//as many arguments as you want, lookup of length each iteration is slower but safer... maybe?
Array.prototype.myPush = function(items){
	var i;
	for(i = 0; i < arguments.length; i++){
	    this[this.length] = arguments[i];
	}
	return this.length;
}

//unique returns a copy of the array without any duplicates
function unique(arr){
	var newArr = [];
	var copies = {};
	var i;
	for(i = 0; i < arr.length; i++){
		if(!copies[arr[i]]){
			copies[arr[i]] = arr[i];
			newArr.push(arr[i]);
		}
	}

	return newArr;
}
//find the most common letter in an array of words
function frequency2(arr){
	var i;
	var most = 0;
	var retLetter;
	var lCounts = {};
	var arrStr = arr.join("").toLowerCase();
	for(i = 0; i < arrStr.length; i++){
		lCounts[arrStr[i]] = (lCounts[arrStr[i]] || 0) + 1;
		if(lCounts[arrStr[i]] > most){
			 most = lCounts[arrStr[i]];
			retLetter = arrStr[i];
		}
	}
	return retLetter;
}

exports.unique = unique;
exports.frequency2 = frequency2;
//

