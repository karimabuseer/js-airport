let fizzBuzz = (num) => { 
  if (num % 3 === 0 && num % 5 !== 0) { 
    return 'fizz';
  }

  else if (num % 5 === 0 && num % 3 !== 0) { 
    return 'buzz';
  }
  else if (num % 3 === 0 && num % 5 === 0)
  {
    return 'fizzbuzz';
  }
  else
    {
      return num;
    }
} 