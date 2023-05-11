

// let age=15;

//         console.log(age)

//         string(age)

//         console.log(age)
// const firstName='jonas'
// const job='teacher'
// const birthYear='2000'
// const year='2030'




// const jonas= "I'm " + firstName + ', a '+ (year-birthYear) + ' years old ' + job+ '!';
// console.log(jonas);

// Assignment
// 1.
const today = new Date();
const month = today.getMonth() + 1;
const day= today.getDate();
const year= today.getFullYear();

const dateFormats = [
    `${month}-${day}-${year} `,
    `${month}/${day}/${year} `,
    `${day}-${month}-${year} `,
    `${day}/${month}/${year}`
];
for (const format of dateFormats) {
    console.log(format);
  }
  












