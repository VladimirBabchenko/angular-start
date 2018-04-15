class Creature {
    private age: any = [];
    constructor(
        
        public readonly name: string,
        public surname: string,
    ) { }
}

class Human extends Creature {
    constructor(name, surname) {
        super(name, surname)
    }
}

const creature: Creature = new Creature("vova", "bab")
console.log(creature)

const human = new Human("Vova", "Bab");
console.log();