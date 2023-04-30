function Person(name, age) {
	this.name = name;
	this.age = age;
}
let capt = new Person('capt', 100);

class Person {
	// 클래스 로직
	constructor(name, age) {
		console.log('생성 되었습니다');
		this.name = name;
		this.age = age;
	}
}

let seho = new Person('seho', 100);
console.log(seho); // '생성 되었습니다' Person {name: 'seho', age: 100}
