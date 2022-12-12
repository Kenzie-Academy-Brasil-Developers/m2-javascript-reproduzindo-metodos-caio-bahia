/*Adicione seu codigo abaixo */
const numbers = [1,3,7,9,12]
const names = [joão,maria,jose]


// Metodo Map
  function map(array){
    let resultado = []
    for(let i = 0;i<array.length;i++){
        resultado.push(mapOperation(array[i],i,array))
    
    }
    return resultado
  }
function mapOperation(elemento,i,array){
    return `O numero ${elemento} na posição ${i} veio do array: ${array}`
}

// console.log(map(numbers))

// Metodo Filter
const filter = (array) => {
    const filterfilter = [1,10]
    const output = []

    for(let i = 0;i < array.length;i++){
        for(let j = 0; j < filterfilter.length; j++){
            if(array[i] === filterfilter[j]){
                output.push(array[i])
            }
        }
    }

    return output
}

// console.log(filter(numbers))

// Metodo Find

function find(array,elemento){
  for(let i = 0;i<array.length;i++){
    if(array[i]===  elemento)
    return array[i]
  }
  return "neca de catipiribas"
}




// Metodo Reduce
  function reduce(array){
    let resultado = 0
    for(let i = 0;i<array.length;i++){
        resultado = reduceOperation(resultado,array[i])
    }
    return resultado 
  }
  function reduceOperation(acumulador, elemento){
    return acumulador + elemento
  }

//   console.log(reduce(numbers))

// Metodo Includes

function includes(array, elemento){

    let output =  false
    for(let i = 0;i<array.length;i++){
        if(array[i] == elemento){
            output = true
        }
    }
    return output
}

// Metodo IndexOf

function IndexOfOperation(elemento){
  return elemento > 10
}

function IndexOf(array){
    for(let i = 0;i<array.lenght;i++){
      if(array[i] > 10)
      return i
    }
    return -1
}

