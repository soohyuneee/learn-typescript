// function logText(text) {
// 	console.log(text);
// 	return text;
// }
// logText(10);
// logText(true);
// logText('hi');

// function logText<T>(text: T): T {
// 	console.log(text);
// 	return text;
// }
// logText<string>('hi');

// function logText(text: string) {
// 	console.log(text);
// 	return text;
// }

// function logNumber(num: number) {
// 	console.log(num);
// 	return num;
// }

// function logText(text: string | number) {
// 	console.log(text);
// 	return text;
// }

// const a = logText('a');
// a.split('')
// logText(20);

function logText<T>(text: T): T {
	console.log(text);
	return text;
}

const a = logText<string>('a');
a.split('');

const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
// 	value: string;
// 	selected: boolean;
// }

interface Dropdown<T> {
	value: T;
	selected: boolean;
}

const obj1: Dropdown<number> = { value: 1, selected: false };
const obj2: Dropdown<string> = { value: 'a', selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
// 	console.log(text.length);
// 	text.forEach((text) => console.log(text));
// 	return text;
// }
// logTextLength(['hi', 'abc']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
	length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
	text.length;
	return text;
}
logTextLength('a');
logTextLength({ length: 10 });

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
	name: string;
	price: number;
	stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
	return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
