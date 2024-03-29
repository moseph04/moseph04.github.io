/* IMPORTANT VALUES

This section contains a list of all variables predefined for you to use (that you will need)

The CSS ids you will work with are:

1. bubbleCounter -- the container for the counter text for bubble sort
2. quickCounter  -- the container for the counter text for quick sort

*/

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES BELOW HERE /////////////////////
///////////////////////////////////////////////////////////////////////

// TODO 2: Implement bubbleSort
async function bubbleSort(arr){ //looping over the elements in an array and swapping them depending on size
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
        if (arr[i].value > arr[j].value){
          swap(arr, i, j);
          updateCounter(bubbleCounter);
          await sleep();
        }
      }
    }
  }

// TODO 3: Implement quickSort
async function quickSort(arr, left, right){ //async makes sorting compatible with sleep function
    console.log("hi");
    if (right - left > 0){
        var index = await partition(arr, left, right);
        if(left < index - 1){
            await quickSort(arr, left, index - 1);
        } 
        
        if(right > index){
            await quickSort(arr, index, right);
        }
    } else {
        return;
    } 
}

// TODOs 4 & 5: Implement partition
async function partition(arr, left, right){ 
    console.log("eyy");
    var pivot = arr[Math.floor((right + left)/2)].value;
    while(left < right){
        while(arr[left].value < pivot){
            left = left + 1; 
        }
        while(arr[right].value > pivot){
           right = right - 1; 
        }
        if(left < right){
            swap(arr, left, right);
            updateCounter(quickCounter);
            await sleep();
        } 
    }
    return left + 1;
}

// TODO 1: Implement swap
function swap(arr, i, j){ // switches i and j of the array that is entered as an argument
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    drawSwap(arr, i, j);
  }

///////////////////////////////////////////////////////////////////////
/////////////////////// YOUR WORK GOES ABOVE HERE /////////////////////
///////////////////////////////////////////////////////////////////////

//////////////////////////// HELPER FUNCTIONS /////////////////////////

// this function makes the program pause by SLEEP_AMOUNT milliseconds whenever it is called
function sleep(){
    return new Promise(resolve => setTimeout(resolve, SLEEP_AMOUNT));
}

// This function draws the swap on the screen
function drawSwap(array, i, j){
    let element1 = array[i];
    let element2 = array[j];

    let temp = parseFloat($(element1.id).css("top")) + "px";

    $(element1.id).css("top", parseFloat($(element2.id).css("top")) + "px");
    $(element2.id).css("top", temp);
}

// This function updates the specified counter
function updateCounter(counter){
    $(counter).text("Move Count: " + (parseFloat($(counter).text().replace(/^\D+/g, '')) + 1));
}