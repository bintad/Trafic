// given some number, print "adding up" to the console and add from 1 up to that numnber and return the sum
// Predcted output: sigma(5) should return 15   (I.E: 1+2+3+4+5 =15)

function sigma(num){
    var sum=0;
    for(var i=1; i<=num; i++){
        sum=sum+i; 
console.log("adding up");
return sum; 
}
var sum = sigma(5);
console.log(sum);

}