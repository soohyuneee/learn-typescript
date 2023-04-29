interface User {
	age: number;
	name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
	age: 11,
	name: 'seho',
};

// 함수에 인터페이스 활용
function getUser(user: User) {
	console.log(user);
}
const capt = {
	age: 13,
	name: 'capt',
};
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
	(a: number, b: number): number;
}

let sum: SumFunction;
sum = function (a: number, b: number): number {
	return a + b;
};

// 인덱싱
interface StringArray {
	[index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'd';

// 딕셔너리 패턴
interface StringRegexDictionary {
	[key: string]: RegExp;
}

let obj: StringRegexDictionary = {
	cssFile: /\.css$/,
	jsFile: /\.js$/,
};

Object.keys(obj).forEach((v) => v);

// 인터페이스 확장
interface Person {
	name: string;
	age: number;
}

interface Developer extends Person {
	language: string;
}

let soo: Developer = {
	name: 'soo',
	age: 100,
	language: 'ts',
};
