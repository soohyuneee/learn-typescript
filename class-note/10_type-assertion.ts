// 타입 단언(Type Assertion)
let a;
a = 20;
a = 'a';

let b = a;
let c = a as string;

// DOM API 조작
let div1 = document.querySelector('div');
if (div1) {
	div1.innerText;
}

let div2 = document.querySelector('div') as HTMLDivElement;
div2.innerText;
