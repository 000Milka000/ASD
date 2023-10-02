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

let dog = new Animal("собака", "зонарного");
dog.asd();
