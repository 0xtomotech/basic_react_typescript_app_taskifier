let age: number;
let isStudent: boolean;
let hobbies: string[];
let btcPrice: number[];
let role: [number, string];

type Person = {
  name: string;
  age?: number; // Optional property
}

let person: Person = {
  name: 'John Doe',
}


let newAge: number | string;

newAge = '22'

let lotsOfPeople: Person[];

// function printName(name: string) {
//   console.log(name)
// }

// printName("tomo")

// Another way of assigning type to a given function
let printName: (name: string) => void; // returns undefinied
let printName2: (name: string) => never; // doesn't actually return anything

// instead of any, unknown usage is recommended

let personName: unknown;

// works just like type

type X = {
  a: string;
  b: number;
}

type Y = X & {
  c: string;
  d: number;
}

let something: Y = {
  c: 'hellothere',
  b: 5,
  a: 'yoo',
  d: 10,
};

interface Person2 {
  name: string;
  age?: number;
}

interface Guy2 extends Person2 {
  profession: string;
}

interface Guy3 extends X {
  destination: string;
}