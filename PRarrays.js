
let grades = [96, 25, 87, 45, 68];

 // print element second and 4th element
 console.log(grades[1]);
 console.log(grades[3]);

 // print every element and its index
 console.log(grades[0], 0);
 console.log(grades[1], 1);
 console.log(grades[2], 2);
 console.log(grades[3], 3);
 console.log(grades[4], 4);
 
 // set the 3rd element to itself times 3
 grades[3] = grades[3] * 3;

 // transform grades into [0, 0, 0, 0, 0]
 grades = [0, 0, 0, 0, 0]; 

 // add 100 to end of grades
 grades.push(100);

 // remove last element from grades
 grades.pop();

 // add 50 to the start of grades
 grades.unshift(50);

 // remove first element from array
 grades.shift();
 
