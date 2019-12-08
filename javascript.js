/*
John Scales
CWID 888865730
Class Number 335-04
13602 Loumont st.
Whittier, CA 90601
23 November 2019
3 Sort race
This file contains all of the js for project 3.
*/
//convert hex to base10
function hextonum(aa){
  for (var i = 0; i<aa.length; i++){
    //console.log(aa[i])
    switch(aa[i]){
      case '0':
      aa[i]=0;
      break
      case '1':
      aa[i]=1;
      break
      case '2':
      aa[i]=2;
      break
      case '3':
      aa[i]=3;
      break
      case '4':
      aa[i]=4;
      break
      case '5':
      aa[i]=5;
      break
      case '6':
      aa[i]=6;
      break
      case '7':
      aa[i]=7;
      break
      case '8':
      aa[i]=8;
      break
      case '9':
      aa[i]=9;
      break
      case 'A':
      aa[i]=10;
      break;
      case 'B':
      aa[i]=11;
      break;
      case 'C':
      aa[i]=12;
      break;
      case 'D':
      aa[i]=13;
      break;
      case 'E':
      aa[i]=14;
      break;
      case 'F':
      aa[i]=15;
      break;
    }
  }
  //console.log(aa);
  return aa;
}
/////////////////
//SWAP FUNCTION//
/////////////////
function swap(obj, leftIndex, rightIndex){
    console.log("Swap "+obj.items[leftIndex] + " with " + obj.items[rightIndex])
    var temp = obj.items[leftIndex];
    obj.items[leftIndex] = obj.items[rightIndex];
    obj.items[rightIndex] = temp;
}
/////////////
//QUICKSORT//
/////////////
function partition (arr, low, high) {
        var pivot = arr[high];
        var i = (low - 1);
        for (var j = low; j <= high - 1; j++) {
            {
                if (arr[j] <= pivot) {
                    i++;
                    var temp_1 = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp_1;
                }
            }
            ;
        }
        var temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
    function QuickSort(arr, low, high) {
        if (low < high) {
            var pi = partition(arr, low, high);
            QuickSort(arr, low, pi - 1);
            QuickSort(arr, pi + 1, high);
        }
    }
///////////////
//BUBBLESORT//
//////////////
function BubbleSort(obj, ctr){
  //console.log(ctr)
  for (var j=obj.curpos; j < obj.items.length-obj.ctr-1; j++){
    //console.log(j)
    if(obj.items[j]>obj.items[j+1]){
      obj.swap++
      swap(obj,j,j+1)
      obj.curpos=j+1
      break
    }
  }
  if(j==obj.items.length-1-obj.ctr){
    if(obj.swap == 0){
      obj.done=true
      return
    }
    obj.swap=0
    obj.ctr++
    obj.curpos=0
  }
}
//////////////////////////////////////////////////////////////////////
let ops = 0;  // for performance evaluation only

function mergeSort (obj) {
  // break array into individual arrays of single integers
  // keep merging until result contains a single array
  //while (result.length > 1) {
    const oddNumbered = obj.result.length % 2 != 0;
    let temp = [];

    // iterate 2 subarrays at a time and merge into larger subarray
    for (let i = 0; i < obj.result.length; i += 2) {
      let a = obj.result[i];
      let b = obj.result[i + 1];

      // pre-merge 3 subarrays into 2 if there are odd number of subarrays
      if (oddNumbered && i == (obj.result.length - 3)) {
        b = merge(b, obj.result[i + 2]);
        i++;
      }
      // accumulate intermediate result
      temp.push(merge(a, b));
    }
    // current level merged, update result
    obj.result = temp;
  //}
  return obj.result;
}

function merge (arrA, arrB) {
  const merged = [];
  var j = 0;
  var k = 0;

  while (merged.length != (arrA.length + arrB.length)) {
    ops++;
    if (arrB[k] == undefined || arrA[j] <= arrB[k]) {
      merged.push(arrA[j]);
      j++;
    } else if (arrA[j] == undefined || arrA[j] > arrB[k]) {
      merged.push(arrB[k]);
      k++;
    }
  }
  return merged;
}
