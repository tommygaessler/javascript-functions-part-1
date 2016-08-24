// Define a function called sum that takes two numbers as arguments and returns their sum.

console.log("Question 1");

function sum(numb1, numb2)
{
  return numb1 + numb2;
}

var resultSum = sum(1,2);
console.log(resultSum === 3);
console.log(resultSum === 2);

// Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.

console.log("Question 2");

function isEqual (arg1, arg2)
{
  if (arg1 === arg2)
  {
    return true;
  }

  else
  {
    return false;
  }
}
console.log(isEqual(1, 1));
console.log(isEqual(1, 2));
console.log(isEqual(1, '1'));
console.log(isEqual('one', 'one'));

// Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

console.log("Question 3");

function discountPercentage(ogPrice, discount) {
  discount = discount * .01
  console.log(discount);
  if (discount > 1 || discount < 0)
  {
    return alert("discount error")
  }
  return ogPrice * discount;
}
console.log(discountPercentage(100, 50));

// Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.

console.log("Question 4");

function stringCapitalize(string)
{
  string = string.split(" ");
  console.log(string);

  for (i=0; i<string.length; i++)
  {
    var nonCap = string[i].substring(1)
    string[i] = string[i].charAt(0).toUpperCase();
    string[i] = string[i] + nonCap;
  }
  console.log(string);
  return string.join(" ");
}
console.log(stringCapitalize("hello my name is tommy"));

// Define a function called evenNumbers that takes an arbitrary integer as an argument, from 0 to 100, and outputs all the even integers from 0 to that arbitrary number.

console.log("Question 5");

function evenNumbers(arbitrary)
{
  for (t=0; t<=arbitrary; t++)
  {
    if (t % 2 === 0)
    {
      console.log(t);
    }
  }
}
evenNumbers(50);

// Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

console.log("Question 6");

function isDivisible(first, second)
{
  if (first % second === 0)
  {
    return true;
  }

  else
  {
    return false;
  }
}
console.log(isDivisible(10, 5));

// Bonus: Write a function called oddNumbers that takes an arbitrary integer as an argument, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the arbitrary number. If the number is less than 40, output all the odd integers from 0 to 40.

console.log("Question 7");

function oddNumbers(anotherArbitrary)
{
  if (anotherArbitrary >= 0 && anotherArbitrary <= 100)
  {
    if (anotherArbitrary > 40)
    {
      for (x=41; x<=anotherArbitrary; x+=2)
      {
          console.log(x);
      }
    }

    if (anotherArbitrary <= 40)
    {
      for (j=1; j<=40; j+=2)
      {
          console.log(j);
      }
    }
  }
}
oddNumbers(40);
