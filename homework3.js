//1. A function that takes at least three arguments and returns the result of some set of 
//operations using those arguments
const fullName = function (fName,mName,lName) {
	return fName + ' ' + mName + ' ' + lName
};
console.log(fullName('Anzhela','Ang','Poghosyan'));

//2. A function that takes no arguments and returns something
const nothing = function (no,arguments) {
	return "something"
};
console.log(nothing());

//3. A function that takes arguments, does something but does not return anything
const something = function(a,b) {
	const c = (a + b)
};
console.log(something(1,2));

//4. A function that takes three strings and returns the string that is the longest
const highest = function(g,e,f) {
	let z = 'amenashat'
	if((g.length > e.length) && (g.length > f.length)) {
        z = g	
	} else if((e.length > g.length) && (e.length > f.length)) {
	    z = e	
	} else if ((f.length > g.length) && (f.length > e.length)) {
	    z = f	
	}
	return z
};
console.log(highest('hi','hello','bye'));

//5. A function that takes two numbers and returns 0 if they are equal
//, 1 if the first is larger and -1 if the second is larger

const havasar = function(h,i) {
	let pataskhan = 'kamzrokammekkamminusmek'
	if(h === i) {
		pataskhan = 0
	} else if(h > i) {
		pataskhan = 1
	} else if(h < i) {
		pataskhan = -1
	}
	return pataskhan
};
console.log(havasar(4,56));

// 6. Create a multiply function 
//that multiplies the two given arguments together and returns the result)

const multiply = function(q,w) {
	return q*w
};
console.log(multiply(3,6));

//7. Create a divide function 
//(that divides the first argument by the second and returns the result)

const divide = function(m,g) {
	return m / g
};
console.log(divide(8,2));

//8. Create a triangleArea function that takes base and height as input and returns the area
//of a triangle without using * or / (Use the multiply and divide functions you already wrote)
const triangleArea = function(base, height) {
  return divide(multiply(base,height), 2) 
};
console.log(triangleArea(5,6));

//9. Create a function called numLength that takes a number and returns the number of 
//characters in the number (example: numLength(8940); should return 4).  
//Hint: strings have .length, numbers don't - so make a string and then get the length
const numLength = function(num) {
	const erkarutyun =num + ' '
	return erkarutyun.length -1
};
console.log(numLength(5568936789));

//10.Create a function that takes two strings and a number. 
//If the length of the two strings concatenated together is greater than the given number,
//return 1, else return -1
const twoStringsAndNum = function(num1,str1,str2) {
	const num1Length = num1 + " "
	const str1and2Length = str1.length + str2.length
	let minusMekKamMek = 'answer'

	if(str1and2Length > (num1Length.length-1)) {
		minusMekKamMek = 1
	} else {
		minusMekKamMek = -1
	};
	return minusMekKamMek
};
console.log(twoStringsAndNum(349,'sev','spitak'));

//11. Create a function runStuff that takes two numbers and a string.  
//If the string is 'rectangle', return the area of a rectangle using the two numbers as 
// base and height.  If the string is 'triangle', return the area of a triangle 
// (you can use the triangleArea function here).  
// If the string does not match 'rectangle' or 'triangle', return -1.

const runStuff = function(numb1,numb2,what) {
	let area = 'pataskhan1'
	if(what === 'rectangle') {
		area = multiply(numb1,numb2)
	} else if (what === 'triangle') {
		area = triangleArea(numb1,numb2)
	} else {
		area = -1
	};
	return area
};
console.log(runStuff(4,5,'rectangle'));


















