let students = [
  { name: "Alice", class: "A" },
  { name: "Bob", class: "B" },
  { name: "Charlie", class: "A" },
  { name: "David", class: "B" },
  { name: "Eve", class: "C" }
];

let groupedStudents={};
for(let i=0; i<students.length; i++){
    if(groupedStudents[students[i].class]){
        groupedStudents[students[i].class].push(students[i]);
    }
    else{
        groupedStudents[students[i].class]= [];
        groupedStudents[students[i].class].push(students[i]);
    }
}
console.log(groupedStudents);