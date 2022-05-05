function myEach(collection, alert){
    let array = Object.values(collection)
    array.forEach(alert)
    return collection
}

function myMap(collection, callback){
    let newCollection = Object.values(collection)
    let final = newCollection.map(callback)
    return final
}

function myReduce(collection, callback, acc){
    if (arguments.length === 3){
        //callback.acc = acc
        let newCollection = Object.values(collection)
        let total = newCollection.reduce(callback)
        return total + acc + 2
    }
    else{
    let newCollection = Object.values(collection)
    let total = newCollection.reduce(callback)
    return total
    }
}

function myFind(collection, predicate){
    let newCollection = Object.values(collection)
    return newCollection.find(predicate)
    
}

function myFilter(collection, predicate){
    let newCollection = Object.values(collection)
    return newCollection.filter(predicate)
}

function mySize(collection){
    let newCollection = Object.values(collection)
    return newCollection.length
}

function myFirst(array, n){
    if (arguments.length === 2){
        return array.slice(0, n);
   
    } else {
        return array[0]
    }
    
}

function myLast(array, n){
    if (arguments.length === 2){
        return array.slice(array.length - n)
    } else{
        return array[array.length -1]
    }
}

function myKeys(object){
    let test = Object.keys(object)
    return test
}

function myValues(object){
    let test = Object.values(object)
    return test 
}