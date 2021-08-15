//No 1 - Penjumlahan multiarray menggunakan Function deepSum
//Pembuatan function masih gagal jadi ini tidak pakai function hanya for saja.
//Test-1

let arry = [
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
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

console.log(deepSum); //output 156