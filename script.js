var matr = [
[ 1, 5, 7, "V"],
[ 3, 8, "O", 9],
[ 1, "V", 4, 4],
[ "A", 8, 9, 9],
]

function diagonal(mass){
	var arr = [];
  var pos = 1;
	for(var i = 0; i<mass.length;i++){
  	arr.push(mass[i][mass.length-pos]);
    pos++;
  }
  alert(arr);
}

diagonal(matr);




// function arrFibb() {
//     var num = Number(prompt("input number: "));
//     var arr = [];
//     var a = 1;
//     var b = 1;
//     for(var i = 1; i <num; i++) {
//         var c = a + b;
//         a=b;
//         b=c;
//         arr.push(a);
//     }
//     alert(arr);
// }
// arrFibb();


// var masiv = [
//     ["lt", 16, "al", 1, "gkf", 4],
//     ["kk", 4, "ne", 2, "lk", 12],
//     ["yau", 2, "fit", 6, "miv", 445],
//     ["ua", 9, "toe", 7, "num", 12],
//     ["dfdela", 4, "qrgty", 1, "qwe", 99],
//     ["assdau", 9, "ask", 9, "zxc", 91],
// ];
// var arrNum = [];
// for(var i = 0; i<masiv.length; i++) {
//     for(var j = 0; j<masiv[i].length; j++) {
//         if(typeof(masiv[i][j])=="number") {
//             arrNum.push(masiv[i][j]);
//         }
//     }
// }
// alert(arrNum);
