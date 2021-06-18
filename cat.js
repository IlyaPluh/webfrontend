function makeClones(a, b){
    let arr = [];
    for (let i = 1; i <= b; i++){
        arr.push(a);
    }
    return(arr);
}
let cat = {
    name: 'Tom',
    age: 5,
    weight: 10,
    energy: 100,
    hunger: 1,
    head: {
        eyes: [
            {color: 'yellow'},
            {color: 'blue'}
        ],
        ears: makeClones({}, 2),
        color: "red",
        teeth: {
            amount: 30,
            condition: 'sharp'
        },
    },
    body: {
        back_color: 'red',
        belly_color: 'white',
        },
    limbs: makeClones({claws: true}, 4),
    tail: {
        color: 'red',
        stripes: true,
        },
    speak() {
        this.weight -= 0.01;
        this.hunger += 1;
        if (this.hunger <= 15 && this.weight > 0) console.log(`${this.name} says: meow`);
        if (this.hunger > 16 && this.hunger <= 30 && this.weight > 0) console.log(`${this.name} says: Meow`);
        if (this.hunger > 31 && this.hunger <= 45 && this.weight > 0) console.log(`${this.name} says: MEow`);
        if (this.hunger > 46 && this.hunger <= 60 && this.weight > 0) console.log(`${this.name} says: MEOw`);
        if (this.hunger > 61 && this.hunger <= 75 && this.weight > 0) console.log(`${this.name} says: MEOW`);
        if (this.hunger > 76 && this.hunger <= 90 && this.weight > 0) console.log(`${this.name} says: MEOOOW`);
        if (this.hunger > 91 && this.hunger <= 100 && this.weight > 0) console.log(`${this.name} says: MEOOOW!!!`);
        if (this.hunger > 100  && this.weight > 0) console.log(`${this.name} says: ...`);
    }    
};
function deepCopy(a) {
    let clone = {};
    for (let i in a) {
        if (a[i] instanceof Object) clone[i] = deepCopy(a[i]);
        else clone[i] = a[i];
    }
    return clone;
};
let cat2 = deepCopy(cat);
cat2.name = "Felix";
cat2.age = 3;
cat2.body.back_color = "black";
cat2.head.eyes[1].color = "yellow";
console.log(JSON.stringify(cat));
cat.speak();
console.log(JSON.stringify(cat2));