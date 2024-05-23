/*function pluck(array,propiedad){
narray=array.map(function(producto){
    return producto[propiedad]
},)
   return narray
}
pluck([{name:"TV"},{name:"PC"}],"name")
console.log(pluck([{name:"TV"},{name:"PC"}],"name"))
*/
function pluck(array,propiedad){
    var narray=[]
    for(let i=0; i<array.length; i++){
      narray.push(array[i][propiedad])
    }
    
    return narray
    }
    pluck([{name: "Tv"},{name: "Pc"}],"name")
    console.log(pluck([{name: "Tv"},{name: "Pc"}],"name"))