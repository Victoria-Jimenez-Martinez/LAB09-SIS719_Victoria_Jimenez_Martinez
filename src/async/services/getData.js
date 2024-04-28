( async () => {

  const productId = Math.floor(Math.random() * 100) + 1;

  const response = await fetch(`https://dummyjson.com/products/${productId}`); 
  
  const data = await response.json();

  console.log(data); 

})();
