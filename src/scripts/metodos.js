/*Adicione seu codigo abaixo */
const numbers = [1,3,7,9,12]
const names = ['João','Maria','José','Pedro','Jeff','Caio']


// Metodo Map
  function map(array, callback){
    let resultado = []
    for(let i = 0;i<array.length;i++){
        resultado.push(callback(array[i],i,array))
    
    }
    return resultado
  }

function mapOperation(elemento,i,array){
    return `O numero ${elemento} na posição ${i} veio do array: ${array}`
}

console.log(map(numbers,mapOperation))

// Metodo Filter

const filter = (array,callback) =>{
  const output = []
  for (let i = 0; i < array.length; i++){
    if(callback(array[i]) ==  true){
      output.push(array[i])
    }
  }
  return output
}

const filterOperation = (element) =>{
  if(element <= 5){
    return true
  }
  return false
}


console.log(filter(numbers,filterOperation))

// Metodo Find
 

const findOperation = (element, index, array) => {
  if(element === array[index]){
    return array[index]
  }
}

function find(array,callback,elementToFind){
  for(let i = 0;i<array.length;i++){
    if(callback(elementToFind,i,array) !== undefined)
    return callback(elementToFind,i,array)
  }
  return undefined
}

console.log(find(names,findOperation,'Maria'))

// Metodo Reduce
  function reduce(array, callback){
    let resultado = 0
    for(let i = 0;i<array.length;i++){
        resultado = callback(resultado,array[i])
    }
    return resultado 
  }
  function reduceOperation(acumulador, elemento){
    return acumulador + elemento
  }

  console.log(reduce(numbers))

// Metodo Includes


  const includes = (array,elementoIncludes,inicialPoint) => {
    let output = false
    for(let i = inicialPoint;i < array.length;i++ ){
      if(elementoIncludes == array[i]){
        output = true
      }
    }
    return output
  }

console.log(includes(numbers,7,0))



// Metodo IndexOf
const IndexOf = (array,elementIndexOf,inicialPoint,callback)=>{
  let output = -1

  if(inicialPoint > array.length){
    return output
  }else{
    for(let i = inicialPoint;i<array.length;i++){
      if(callback(array,elementIndexOf,i) >= 0){
        output = callback(array,elementIndexOf,i)
      }
    }

  }
  return output
}
const IndexOfOperation = (array,elementIndexOf,index)=>{
  if(elementIndexOf===array[index]){
    return index
  }
}


console.log(IndexOf(names,'Maria',0,IndexOfOperation))

