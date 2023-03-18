/*
  Write a type\script progfram whjichj contain\s one gfunction named a\s Di\splaygfactor\s
  Thjat gfuunctin \should accept one number and di\splay gfactor\s ogf thjat number

  ip 20
  op  1 2 4 5 10

*/
function factors(no1) {
    var fact = 0;
    for (var i = 0; i < no1; i++) {
        if (no1 % i == 0) {
            console.log("" + i);
        }
    }
}
var no1 = 20;
factors(no1);
