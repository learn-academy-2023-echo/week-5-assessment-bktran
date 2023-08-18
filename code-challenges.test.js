// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("encode", () => {
  it("returns a string with a coded message", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(encode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(encode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(encode(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
// ==> ReferenceError: encode is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare function encode, takes in str param
//  split string to an array
// map over array
// if value downcased equals a,e,i,o
  // return value as 4, 3, 1, 0 respectively
// else return original value
// join array to make string

const encode = (str) => {
  return str.split("").map( value => {
    let vDownCased = value.toLowerCase()
    if (vDownCased === "a"){
      return "4"
    } else if ( vDownCased === "e"){
      return "3"
    } else if ( vDownCased === "i"){
      return "1"
    } else if ( vDownCased === "o"){
      return "0"
    } else {
      return value
    }
  }).join("")
}

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("extract", () => {
  it("returns an array of all the words containing that particular letter", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    const filterLetterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const filterLetterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(extract(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
    expect(extract(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
//==> ReferenceError: extract is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare function contains with 2 params. array and letter
// create result array as empty
// iterate over array with for loops
// if value at index (lowercased) includes letter
  // push value to result array
// return result array

const extract = (array, letter) => {
  let result = []
  for (let i = 0; i < array.length; i++){
    if (array[i].toLowerCase().includes(letter) ){
      result.push(array[i])
    }
  }
  return result
}


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
  it("determines whether or not the array is a 'full house'", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
    expect(fullHouse(hand4)).toEqual(true)
  })
})
//==> ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// declare function fullHouse with 1 param as array
// declare isFullHouse flag initialize to false
// declare hand = {}
// iterate over array
  // if value of array exist as key in hand obj
    // increment key by 1
  // else
    // set value of array as new key in hand obj = 1
// extract values of hand obj to an array
  // if value is 2 and 3
  // isFullHouse = true
// return isFullHouse

const fullHouse = (array) => {
  let isFullHouse = false
  let hand = {}
  for (let i = 0; i < array.length; i++){
    if (hand[array[i]]){
      hand[array[i]]++
    } else {
      hand[array[i]] = 1
    }
  }
  let valueCounts = Object.values(hand)
  if (valueCounts.includes(2) && valueCounts.includes(3)){
    isFullHouse = true
  }
  return isFullHouse
}
