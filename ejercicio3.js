function numDeCarar(string){
 console.log(string.split("").sort())   
var arrO=string.split("").sort()
var cont=1
var string={}
for(let i=0; i<arrO.length; i++){
    
    if(arrO[i]===arrO[i+1]){
cont ++
    }
else{
    string[arrO[i]]=cont
    
    cont=1
    }   
}
return string
}
console.log(numDeCarar("babcaaff"))

