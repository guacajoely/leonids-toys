//LEONID'S TOYS

const toys = [

{
    id: 1,
    name: "Playstation 5",
    manufacturer: "Sony",
    price: 500,
    releaseDate: '11/12/2020',
    currentGen: true
},

{
    id: 2,
    name: "Xbox Series X",
    manufacturer: "Microsoft",
    price: 500,
    releaseDate: '11/10/2020',
    currentGen: true
},

{
    id: 3,
    name: "Switch",
    manufacturer: "Nintendo",
    price: 300,
    releaseDate: '03/03/2017',
    currentGen: true
}
]

const genesis = {
    id: 4,
    name: "Genesis",
    manufacturer: "Sega",
    price: 100,
    releaseDate: '01/09/1989',
    currentGen: false
}

const gamecube = {
    id: 5,
    name: "Gamecube",
    manufacturer: "Nintendo",
    price: 200,
    releaseDate: '09/14/2001',
    currentGen: false
}

toys.push(genesis)
toys.push(gamecube)

const findToy = function(toyID){

    for (const toy of toys) {

        if(toy.id === toyID){

            toy.price = (toy.price * 1.05).toFixed(2)

            if (toy.currentGen === true){
                console.log(`We have a new ${toy.manufacturer} ${toy.name} on sale for $${toy.price}.`)
            }

            else{
                console.log(`We have a refurbished ${toy.manufacturer} ${toy.name} on sale for $${toy.price}.`)
            }
        }
    }
}


findToy(1)



///////////////////////////////////////////////////////////////////////////////////////////////
//EXPLORER CHAPTERS 

//MAPS with LEONID'S TOYS 

//COPY OF ARRAY ABOVE W/OUT PRICES
const toysWithoutPrices = [

    {
        'id': 1,
        'name': "Playstation 5",
        manufacturer: "Sony",
    },
    
    {
        'id': 2,
        'name': "Xbox Series X",
        manufacturer: "Microsoft",
    },
    
    {
        'id': 3,
        'name': "Switch",
        manufacturer: "Nintendo",
    },
    {
        'id': 4,
        'name': "Genesis",
        manufacturer: "Sega",
    },
    {
        'id': 5,
        'name': "Gamecube",
        manufacturer: "Nintendo",
    }
    ]



// Map of each toy and their price
const prices = new Map()
prices.set('Playstation 5', 500)
prices.set('Xbox Series X', 500)
prices.set("Switch", 300)

//DIFFERENT SYNTAX ACHIEVING SAME RESULT
let samePrices = new Map([['Playstation 5', 500], ['Xbox Series X', 500], ["Switch", 300]]);



//ITERATE through the MAP console logging each KEY and VALUE, 
// which we have named NAME and PRICE

for (let [name, price] of prices) {
    console.log(`The ${name} costs $${price}`);
  }

// NOT specifying that you want each KEY and VALUE separated will 
// return an ARRAY of each item in the MAP

for (let pair of prices) {
    console.log(pair);
  }



//create a function that will add a new toy and price to the "prices" Map

const addToyToInventory = (name, price) => {

    prices.set(name, price)

}

// Add a toy from the toysWithoutPrices array to the Map and set its price
addToyToInventory(toysWithoutPrices[0].name, 100)

console.log(prices)


// Map of each toy with each toy OBJECT as the key and their price as the VALUE
const objectPrices = new Map()
objectPrices.set(JSON.stringify(toysWithoutPrices[0]), 500)
objectPrices.set(JSON.stringify(toysWithoutPrices[1]), 500)
objectPrices.set(JSON.stringify(toysWithoutPrices[2]), 300)

console.log(objectPrices)


// create function that updates the price of an item in the objectPrices MAP 

const repriceItemFromArray = function (object, newPrice){

    objectPrices.set(JSON.stringify(object), newPrice)

}

repriceItemFromArray(toysWithoutPrices[0], 200)
console.log(objectPrices)



// create new Map of a different value from the toysWithoutPrices array
// we'll use the id and name of each item in this example


const createNewMap = function (array){

    const newMap = new Map()

    for (let i=0; i<array.length; i++) {

        const newKey = array[i].id
        const newValue = array[i].name

        newMap.set(newKey, newValue)

    }

    return newMap
}

newMapOfNames = createNewMap(toysWithoutPrices, 'id', 'name')

console.log(newMapOfNames)






///////////////////////////////////////////////////////////////////////////////////////////////
//SETS with LEONID'S TOYS 

//replace array with a SET of toys so there are no duplicates

const newPlaystation = {
    'id': 1,
    'name': "Playstation 5",
    manufacturer: "Sony",
}

const newXbox = {
    'id': 2,
    'name': "Xbox Series X",
    manufacturer: "Microsoft",
}

const newSwitch = {
    'id': 2,
    'name': "Xbox Series X",
    manufacturer: "Microsoft",
}

const newGenesis = {
    id: 4,
    name: "Genesis",
    manufacturer: "Sega",
}

const newGamecube = {
    id: 5,
    name: "Gamecube",
    manufacturer: "Nintendo",
}

const setOfToys = new Set()

setOfToys.add( newPlaystation )
setOfToys.add( newXbox )
setOfToys.add( newSwitch )
setOfToys.add( newGenesis )
setOfToys.add( newGamecube )

console.log(setOfToys)  