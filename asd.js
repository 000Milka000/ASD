class Animal {
    constructor (an, color){
        this.an = an,
        this.color = color
    }

    asd(){
        console.log(`Это ${this.an}. Она ${this.color} цвета. `)
    }
}

let cat = new Animal("кошка", "чёрно-белого");
cat.asd();

let dog = new Animal("собака", "рыжего");
dog.asd();

let wolf = new Animal("волчиха", "серого");
wolf.asd();