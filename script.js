

// const hobby = "coding"
// const hobby2 ="running";


// introduce();
// console.log(hobby2);

// for (let i = 0; i < 4; i++) {
// console.log("Hello world!")
// console.log(i);
// }



// function first(){
//     const hobby = "gaming"
//     function second(){
//         const hobby = "reading"
//         console.log(hobby)
//     }
//     second()
// }

// first()

// function introduce(name="unknown", age=30){
//     console.log(`Hi! My name is ${name}`);
//     console.log(`I'm ${age} years old`);
// }

// introduce("Serbay", 33);
// introduce("Elif", 35);

// introduce("Bob");

// introduce();

// introduce(undefined, 24);





// function calculateAge(dateOfBirth){
//     const age = 2023 - dateOfBirth;
//     // console.log(age);
//     return age;
// }


// const myAge = calculateAge(1989);

// console.log("My age is " + myAge);


// const myAgeIn10Years = myAge + 10;

// console.log("My age in ten years " + myAgeIn10Years);








// let myFruits = ["banana", "berries", "apple", "pineapple"];
// let anotherOne = ["grapes", "pomegranate", "rasberry"]

// // console.log(myFruits.length);

// function listFruits(array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// listFruits(myFruits);

// listFruits(anotherOne);







// const user = ["Allen", 27, false, 20, true]


// function getDataTypes(array){
//     const dataArr = [];
//     for (let i = 0; i < array.length; i++) {
//         dataArr.push(typeof array[i]);
//     }

//     return dataArr;
// }

// const newArr = getDataTypes(user);

// console.log(newArr);




// let myFriends = ["John", "Jane", "Irna", "Anna"];


// function generateSentence(array){
//     let friends = "";
//     for (let i = 0; i < array.length; i++) {
//         if(i == 0){
//             friends = friends +array[i];
//         } else if (i == array.length-1){
//             friends = friends + ", and " + array[i];
//         }
//          else {
//             friends = friends + ", " + array[i]}
//     }

//     let sentence = "My friends are: " + friends + "!";

//     return sentence;
// }

// const newSentence = generateSentence(myFriends);

// console.log(newSentence);




const sandwichOne = ["brown bread", "lettuce", "brown bread"];
const sandwichTwo = ["white bread", "tomato", "white bread"];

function examineSandwiches(array1, array2) {
        if (array1[0] === array1[array1.length-1] && array2[0] === array2[array2.length-1]) {
            return true;
        } else {
            return false;
        }
    }


console.log(examineSandwiches(sandwichOne, sandwichTwo));
// console.log(examineSandwiches(sandwichTwo));




































































