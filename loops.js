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
   
  do {
    
    ar.pop();
  } while (ar.length > 0 && maybeTrue())
 }
 