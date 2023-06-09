// 인터페이스
interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
}

// class Person {
// name: string;
// skill: string;
// }

let developer: Developer;
let person: Person;

// developer = new Person();
// developer = person;
// person = developer;

// 함수
let add = (a: number) => {
	// ...
};

let sum = (a: number, b: number) => {
	// ...
};

sum = add;
// add = sum;

// 제네릭
interface Empty<T> {}

let empty1: Empty<string>;
let empty2: Empty<number>;

// empty1 = empty2;
// empty2 = empty1;

interface NotEmpty<T> {
	data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

// notempty1 = notempty2;
// notempty2 = notempty1;
