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
function inArray(key, arr){
  for(var i = 0; i<arr.length; i++){
    if(key == arr[i]){
      return true
    }
  }
  return false
}
function drawBubbleText( ctx, rtext, x,y, color )
{
    ctx.save( );
    cx1.fillStyle = color || 'lightgrey';
    cx1.font = "20px Arial";
    cx1.fillText( rtext, x, y);
    ctx.restore( );
}
function drawBubbleArray(arr, step){
  var location = 0;
  if(step!=1){
    drawBubbleText(cx1, "Pass "+(step-1)+": ", 1,step*25+20)
  }else{
    drawBubbleText(cx1, "Start: ", 1,step*25+20)
  }

  for(var  i = 0; i<arr.length; i++){
    if(arr[i]>9){
      if(inArray(arr[i], bbswap)){
        drawBubbleText(cx1, arr[i], location*18+90,step*25+20, 'green')
      }else{
        drawBubbleText(cx1, arr[i], location*18+90,step*25+20)
      }

      location=location+.5
    }else{
      if(inArray(arr[i], bbswap)){
        drawBubbleText(cx1, arr[i], location*18+90,step*25+20, 'green')
      }else{
        drawBubbleText(cx1, arr[i], location*18+90,step*25+20)
      }

    }
    location++;
  }
}
function drawMrgText( ctx, rtext, x,y, color )
{
  var newcolor = 'lightgrey';
  if(color % 2 == 0){
    newcolor = 'lightgrey'
  }else{
    newcolor = 'green'
  }
  ctx.save( );
  cx2.fillStyle = newcolor || 'lightgrey';
  cx2.font = "20px Arial";
  cx2.fillText( rtext, x, y);
  ctx.restore( );
}
function drawMrgArray(arr, step){
  var temparray = []
  var color = 0
  if(step==0){
    drawMrgText(cx2, "Start: ", 1,step+45,0)

  }else{
    drawMrgText(cx2, "Pass "+(step-1)+": ", 1,step*25+20,0)
  }
  for(var  i = 0; i<arr.length; i++){
    for(var j = 0; j<arr[i].length; j++){
      temparray.push({value: arr[i][j], color: color})
    }
    color++
  }
  var location = 0;
  for(var i = 0; i<temparray.length; i++){
    console.log(temparray[i])
    if(step == 0){
      if(temparray[i].value > 9){
        drawMrgText(cx2, temparray[i].value, location*18+80,step*25+45, temparray[i].color)
        location=location+.6
      }else{
        drawMrgText(cx2, temparray[i].value, location*18+80,step*25+45, temparray[i].color)
      }
    }else{
      if(temparray[i].value > 9){
        drawMrgText(cx2, temparray[i].value, location*18+80,step*25+20, temparray[i].color)
        location=location+.6
      }else{
        drawMrgText(cx2, temparray[i].value, location*18+80,step*25+20, temparray[i].color)
      }
    }
    location++
  }
}
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
  if(obj.name == "bb"){
    bbswap.push(obj.items[leftIndex])
    bbswap.push(obj.items[rightIndex])
  }else if(obj.name == "mrg"){
    mrgswap.push(obj.items[leftIndex])
    mrgswap.push(obj.items[rightIndex])
  }else if(obj.name == "qs"){
    qsswap.push(obj.items[leftIndex])
    qsswap.push(obj.items[rightIndex])
  }
    console.log("Swap "+obj.items[leftIndex] + " with " + obj.items[rightIndex])
    var temp = obj.items[leftIndex];
    obj.items[leftIndex] = obj.items[rightIndex];
    obj.items[rightIndex] = temp;
}
/////////////
//QUICKSORT//
/////////////
function partition (obj) {
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
    }
    var temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}
function quickSortIterative (obj) {
    var stack = (function (s) { var a = []; while (s-- > 0)
        a.push(0); return a; })(obj.h - obj.l + 1);
    var top = -1;
    stack[++top] = obj.l;
    stack[++top] = obj.h;
    while ((top >= 0)) {
        {
            obj.h = stack[top--];
            obj.l = stack[top--];
            var p = partition(obj);
            if (p - 1 > obj.l) {
                stack[++top] = obj.l;
                stack[++top] = p - 1;
            }
            if (p + 1 < obj.h) {
                stack[++top] = p + 1;
                stack[++top] = obj.h;
            }
        }
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
      //break
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
