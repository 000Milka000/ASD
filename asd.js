// class Animal {
//     constructor (an, color){
//         this.an = an,
//         this.color = color
//     }

//     sss(){
//         console.log(`Это ${this.an}. Она ${this.color} цвета. `)
//     }
// }

// let cat = new Animal("Кошка", "чёрного");
// cat.sss();

// let dog = new Animal("собака", "рыжего");
// dog.sss();

// let wolf = new Animal("волчиха", "серого");
// wolf.sss();
  

// console.log("")

// let fruit = {
//     banan: 5,
//     apple: 2,
//     orange: 14
// };

// for (let k in fruit){
//     console.log(`Это фрукт ${k}.`);
// }




let fruit = ["apple", "orange", "banana"];

fruit.forEach((q,w,e) => {
    console.log(`Это фрукт ${q}.`)
    console.log(`Его номер ${w+1}`)
    console.log(`Исходный массив ${e}`)
    console.log("")})