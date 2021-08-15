//No 1 - Penjumlahan multiarray menggunakan Function deepSum
//Pembuatan function masih gagal jadi ini tidak pakai function hanya for saja.
//Test-1

let arry = [[
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
];

let deepSum = 0;

for (let i = 0; i < arry.length; i++) {
	arry[i].forEach(element=>{
		//console.log(element)
		for (let j = 0; j < element.length; j++) {
			//console.log(element[j]);
			deepSum = deepSum + element[j];
		}
	});
}

console.log(deepSum); //output 316

