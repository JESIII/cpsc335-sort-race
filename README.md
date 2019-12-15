# cpsc335-sort-race
CPSC 335 Sort Race
Class Number 335-04 Project 3 John Scales CWID: 888865730 Team Name: JES Members of Team: John Scales
This program simulates a race between 3 sorting algorithms: Quicksort, Mergesort and Bubblesort.
It shows the pass numbers and the completion time in units of passes.
Quick Sort:
Each pass shows which items in the array have reached their final position which are green.
MergeSort:
Shows the parts of the array that are seperate. For instance on the first pass you will split the array in two and one array will be white and one will be green.
for the second pass of mergesort it will further split those two previous arrays into two more arrays and they will be shown as seperate by alteranting the color of the items from white and green.
***green items that aren't next to each other are not in the same array and same goes for white items***
They are only in the same array if they are adjacent and the same color.
Bubble Sort:
Shows the swaps that occured for each pass. For instance if you have [1,5,3,2]
it will show [1,3,2,5] since 5 got "bubbled up" to the top and since 3, 2, and 5 were swapped, they will be colored green.
To run the program:
Open race.html in a browser. That's it!
///////////////////////////////////////
Unfortunately I did not get quicksort to work but there is some code that partially works inside race.html!