// function logMessage(value: any) {
// 	console.log(value);
// }
// logMessage('hello');
// logMessage(100);

function logMessage(value: string | number) {
	if (typeof value === 'number') {
		value.toLocaleString();
	}
	if (typeof value === 'string') {
		value.toString();
	}
	throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

// function askSomeone(someone: Developer | Person) {
// 	someone.name;
// someone.skill;
// someone.age;
// }

// askSomeone({ name: 'soo', skill: 'ts' });
// askSomeone({ name: 'soo', age: 100 });

function askSomeone(someone: Developer & Person) {
	someone.name;
	someone.skill;
	someone.age;
}

askSomeone({ name: 'soo', skill: 'ts', age: 100 });

// let seho: string | number | boolean;
// let capt: string & number & boolean;
