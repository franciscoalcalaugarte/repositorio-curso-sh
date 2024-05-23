function soloNum(array){
var narray=[]
for(let i=0; i<array.length; i++){
if(array[i]>=0)
narray.push(array[i])

}
return narray
}

console.log(soloNum([2,3,"julio",8,9,"cesar"]))