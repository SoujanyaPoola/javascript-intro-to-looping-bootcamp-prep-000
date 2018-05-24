var array =[]
function forLoop(array)
{
 for (let i = 0; i < 25; i++)
 {
  
  array.push("I am " + i + " strange loop.")
 }
  return array;
}
 

  function whileLoop(n)
 {
   while(n > 0)
   {
     console.log(n);
     n--;
   }
   
   return 'done';
 }
 
 function maybeTrue() {
  return Math.random() >= 0.5;
}

 function doWhileLoop(ar){
    function maybeTrue() {
  return Math.random() >= 0.5;
}
  do {
    console.log(ar.length);
    ar.shift();
  } while (ar.length > 0 && maybeTrue())
 }
 