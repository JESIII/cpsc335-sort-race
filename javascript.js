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
function QuickSort(obj, low, high) {
    if(low<high){
      obj.pivot = QSPart(obj,low,high)
    }
}
function QSPart(obj,low,high){
  var pivot = obj.items[high],
  i = low-1;
  for(var j = low; j<= high-1;j++){
    if(obj.items[j]<pivot){
      i++
      obj.i = i
      obj.j = j
      swap(obj,i,j)
      return
    }
  }
  swap(obj,i+1,high)
  return i+1
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
function mergeSort (obj) {
    if (arr.length < 2) {
      return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = mergeSort(arr.slice(0, mid));
    var subRight = mergeSort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge (node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0]? node1.shift() : node2.shift());
    return result.concat(node1.length? node1 : node2);
}
