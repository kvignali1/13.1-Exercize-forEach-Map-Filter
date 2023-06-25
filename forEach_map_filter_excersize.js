// forEach
// doubleValues([1,2,3]) // [2,4,6]
function doublevalues(arr) {
	const newArr = [];
	arr.forEach(function (num) {
		return newArr.push(num * 2);
	});
	return newArr;
}

// onlyEvenValues([5,1,2,3,10]) // [2,10]
function onlyEvenValues(arr) {
	const evenArr = [];
	const oddArr = [];
	arr.forEach(function (num) {
		if (num % 2 == 0) {
			evenArr.push(num);
		} else {
			return;
		}
	});
	return evenArr;
}

// showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
function showFirstAndLast(arr) {
	const newArr = [];
	arr.forEach(function (word) {
		newArr.push(word[0] + word[word.length - 1]);
	});
	return newArr;
}

// addKeyAndValue(
//     [
//       {name: 'Elie'},
//       {name: 'Tim'},
//       {name: 'Matt'},
//       {name: 'Colt'}
//     ],
//       'title',
//       'instructor'
//     )

//     /*
//       [
//         {name: 'Elie', title:'instructor'},
//         {name: 'Tim', title:'instructor'},
//         {name: 'Matt', title:'instructor'},
//         {name: 'Colt', title:'instructor'}
//       ]
//     */
function addKeyAndValue(arr, newKey, val) {
	arr.forEach(function (v) {
		v[newKey] = val;
	});
	return arr;
}

// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}
// Citation start
// TA Joseph Ssempala revision
// Citation end
function vowelCount(str) {
	let result = {};
	const vowels = "aeiou";
	const chars = Array.from(str);

	chars.forEach(function (char) {
		const letter = char.toLowerCase();

		if (vowels.includes(letter)) {
			if (result[letter]) {
				result[letter] += 1;
			} else {
				result[letter] = 1;
			}
		}
	});

	return result;
}

// doubleValuesWithMap([1,2,3]) // [2,4,6]

function doubleValues(arr) {
	const result = arr.map(function (value) {
		return value * 2;
	});
	return result;
}

// valTimesIndex([1,2,3]) // [0,2,6]

function valMultIndex(arr) {
	const result = arr.map(function (value, index) {
		return value * index;
	});
	return result;
}

// extractFullName
function extractFullName(arr) {
	arr.map(function (val) {
		return `hello${val.first},${val.last}`;
	});
}

// // filterByValue(
// [
// 	{first: 'Elie', last:"Schoppik"},
// 	{first: 'Tim', last:"Garcia", isCatOwner: true},
// 	{first: 'Matt', last:"Lane"},
// 	{first: 'Colt', last:"Steele", isCatOwner: true}
//   ],
//   'isCatOwner'
//   )

//   /*
// 	[
// 	  {first: 'Tim', last:"Garcia", isCatOwner: true},
// 	  {first: 'Colt', last:"Steele", isCatOwner: true}
// 	]
//   */
// cite start
// solution document, springboard forEach/Map/Filter
// cite end
function filterByValue(arr, key) {
	return arr.filter(function (val) {
		return val[key] !== undefined;
	});
}

// find([1,2,3,4,5], 3) // 3
function find(arr, searchValue) {
	return arr.filter(function (val) {
		return val === searchValue;
	})[0];
}

// findInObj(
// 	[
// 	  {first: 'Elie', last:"Schoppik"},
// 	  {first: 'Tim', last:"Garcia", isCatOwner: true},
// 	  {first: 'att', last:"Lane"},
// 	  {first: 'Colt', last:"Steele", isCatOwner: true}
// 	],
// 	'isCatOwner',
// 	true
//   )
//   // {first: 'Tim', last:"Garcia", isCatOwner: true}
function findInObj(arr, key, searchValue) {
	return arr.filter(function (val) {
		return val[key] === searchValue;
	})[0];
}

// removeVowels('Elie') // ('l')
function removeVowels(str) {
	const vowels = "aeiou";
	return str
		.toLowerCase()
		.split("")
		.filter(function (val) {
			return vowels.indexOf(val) === -1;
		})
		.join("");
}

// doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
function doubleOddNumbers(arr) {
	return arr
		.filter(function (val) {
			return val % 2 !== 0;
		})
		.map(function (val) {
			return val * 2;
		});
}
