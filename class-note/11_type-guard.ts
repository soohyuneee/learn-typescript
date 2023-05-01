interface Developer {
	name: string;
	skill: string;
}

interface Person {
	name: string;
	age: number;
}

function introduce(): Developer | Person {
	return {
		name: 'Tony',
		age: 33,
		skill: 'Iron Making',
	};
}

let tony = introduce();

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
	return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
	tony.skill;
} else {
	tony.age;
}
