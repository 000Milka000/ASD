class Animal {
    constructor (an, color){
        this.an = an,
        this.color = color
    }

    sss(){
        console.log(`Это ${this.an}. Она ${this.color} цвета. `)
    }
}

let cat = new Animal("Кошка", "чёрного");
cat.sss();

let dog = new Animal("собака", "рыжего");
dog.sss();

let wolf = new Animal("волчиха", "серого");
wolf.sss();

