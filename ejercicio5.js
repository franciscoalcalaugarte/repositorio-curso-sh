function buscarAmigo(amigos, nombre) {
  var i = 0;
  while (i < amigos.length && amigos[i].nombre != nombre) {
    i++;
  }
    if (i < amigos.length) {
    return amigos[i].nombre;
  }
  else {
    return "no esta el nombre"
  }
  }  
  console.log(buscarAmigo([{nombre:"Julio"},{nombre:"Luis"}],"Pepe"))
  
  function buscarAmigo(amigos, nombre) {
    var i=0
    for( i=0; i<amigos.length && amigos[i].nombre !==nombre; i++){
      console.log("iter",i,nombre)
    }
    if(i < amigos.length)
    
    return amigos[i].nombre;
    
    else return "no esta el nombre"
  }
  console.log(buscarAmigo([{nombre:"Julio"},{nombre:"Luis"}],"Luis"))
  
  function buscarAmigo(amigos, nombre) {
    
   for(let i=0; i<amigos.length; i++){
     if(amigos[i].nombre==nombre)
       return amigos[i].nombre 
   }
   
    return "no esta el nombre"
     
  }
  console.log(buscarAmigo([{nombre:"Julio"},{nombre:"Luis"}],"Pedro"))
  
 