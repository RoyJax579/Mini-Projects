var fibonacci=[];
var numValue = 10;

function Fibonacci(num)
{
  if (num === 0)
  {
    return 0;
  }
  else if ( num === 1 )
  {
    return 1;
  }   
  else {
     return ( Fibonacci(num-1) + Fibonacci(num-2) );
  }
}

console.log("Fn of : "+ numValue +" is "+Fibonacci(numValue-1));

for (var x=0; x < numValue; x++)
{
  console.log(Fibonacci(x));
  fibonacci.push(Fibonacci(x));
}

console.log(fibonacci);