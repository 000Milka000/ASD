class Animal {
    constructor (an, color){
        this.an = an,
        this.color = color
    }

    asd(){
        console.log(`Это ${this.an}. Она ${this.color} цвета. `)
    }
}

let cat = new Animal("Кошка", "чёрного");
cat.asd();

<<<<<<< HEAD
let dog = new Animal("собака", "зонарного");
dog.asd();
=======
let dog = new Animal("собака", "рыжего");
dog.asd();

let wolf = new Animal("волчиха", "серого");
wolf.asd();
>>>>>>> 472c3a0244bb031c06f12b2b4b693280272040b6
