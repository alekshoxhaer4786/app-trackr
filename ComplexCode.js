/* File Name: ComplexCode.js
 * Description: This code showcases a complex and sophisticated JavaScript implementation that utilizes various concepts and techniques.
 */

// 1. Define a class for a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Method to add two complex numbers
  add(complex) {
    return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
  }

  // Method to subtract two complex numbers
  subtract(complex) {
    return new ComplexNumber(this.real - complex.real, this.imaginary - complex.imaginary);
  }

  // Method to multiply two complex numbers
  multiply(complex) {
    const real = (this.real * complex.real) - (this.imaginary * complex.imaginary);
    const imaginary = (this.real * complex.imaginary) + (this.imaginary * complex.real);
    return new ComplexNumber(real, imaginary);
  }

  // Method to divide two complex numbers
  divide(complex) {
    const denominator = Math.pow(complex.real, 2) + Math.pow(complex.imaginary, 2);
    const real = ((this.real * complex.real) + (this.imaginary * complex.imaginary)) / denominator;
    const imaginary = ((this.imaginary * complex.real) - (this.real * complex.imaginary)) / denominator;
    return new ComplexNumber(real, imaginary);
  }
}

// 2. Implement a function to generate Fibonacci sequence up to a given number
function generateFibonacci(n) {
  const fibonacciSequence = [0, 1];
  while (fibonacciSequence[fibonacciSequence.length - 1] < n) {
    const nextNumber = fibonacciSequence[fibonacciSequence.length - 1] + fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextNumber);
  }
  return fibonacciSequence;
}

// 3. Create a higher-order function that returns a function to calculate the nth power of a number
function powerOf(n) {
  return function (base) {
    return Math.pow(base, n);
  };
}

// 4. Implement a custom sorting algorithm for an array of numbers
function customSort(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return numbers;
}

// 5. Utilize a recursive function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// 6. Implement a class to represent a deck of playing cards
class Deck {
  constructor() {
    this.cards = [];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(`${rank} of ${suit}`);
      }
    }
  }

  // Method to shuffle the deck
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = temp;
    }
  }

  // Method to draw a card from the deck
  draw() {
    if (this.cards.length > 0) {
      return this.cards.pop();
    }
    return 'No more cards in the deck.';
  }
}

// 7. Demonstrate the usage of the implemented classes and functions
const complex1 = new ComplexNumber(2, 3);
const complex2 = new ComplexNumber(4, 5);
console.log(complex1.add(complex2)); // Output: ComplexNumber { real: 6, imaginary: 8 }

console.log(generateFibonacci(100)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

const cube = powerOf(3);
console.log(cube(5)); // Output: 125

const numbers = [4, 1, 6, 2, 8, 3];
console.log(customSort(numbers)); // Output: [1, 2, 3, 4, 6, 8]

console.log(factorial(5)); // Output: 120

const deck = new Deck();
deck.shuffle();
console.log(deck.draw()); // Output: Random card from the shuffled deck

// More code and functionality can be added to further demonstrate complexity and sophistication.