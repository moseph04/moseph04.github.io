// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  //applyFilter(reddify); //to-do 4b complete
  applyFilterNoBackground(reddify);
  //applyFilter(decreaseBlue);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){ //to-do 4a complete
  for (var row = 0; row < image.length; row++){ //for looping over rows in image array
    image[row];
    for (var collumn = 0; collumn < image[row].length; collumn++){ // inner for looping over collumns in image array
    var rgbString = image[row][collumn]; //rgbString stores the value of an image index
    var rgbNumbers = rgbStringToArray(rgbString); //rgbNumbers stores the returned value of the called rgbStringToArray function
    filterFunction(rgbNumbers); // ( rgbNumbers[RED] = 225;) - to-do 4c complete, image is now less red//
    rgbString = rgbArrayToString(rgbNumbers); //rgbString has been updated to store the returned value of rbgArrayToString
    image[row][collumn] = rgbString; //tested and works, to-do 2 finished
    }
  }
};

// TODO 7: Create the applyFilterNoBackground function YOU ARE HERE
function applyFilterNoBackground(filterFunction){
  var greyPixel = "rgb(150, 150, 150)";
  for (var row = 0; row < image.length; row++){ 
    image[row];
    for (var collumn = 0; collumn < image[row].length; collumn++){
    var rgbString = image[row][collumn]; 
    var rgbNumbers = rgbStringToArray(rgbString)
    if(rgbString === greyPixel){
      rgbString = rgbArrayToString(rgbNumbers);
      image[row][collumn] = rgbString;
    } else{
    filterFunction(rgbNumbers);
    rgbString = rgbArrayToString(rgbNumbers);
    image[row][collumn] = rgbString;
    } } } };
    
  
 


// TODO 5: Create the keepInBounds function
function keepInBounds(aNumber) {
  return aNumber < 0 ? Math.max(aNumber, 0)
  : aNumber > 255 ? Math.min(aNumber, 255)
  : aNumber;
}; //TERNARY CHAIN TESTED AND WORKS - aNumber IS KEPT BETWEEN 0 AND 255//

// TODO 3: Create reddify function
function reddify(anArray){
  anArray[RED] = 200
};  // no console errors thus far

// TODO 6: Create more filter functions
function decreaseBlue(theArray) {
  var result = keepInBounds(theArray[BLUE] - 50);
  theArray[BLUE] = result; 
}
function increaseGreenByBlue(laArray) {
  var result = keepInBounds(laArray[BLUE]+[GREEN]);
  laArray[GREEN] = result;
}


// CHALLENGE code goes below here
