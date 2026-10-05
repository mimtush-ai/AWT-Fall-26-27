function processOrder(){
  return new Promise((resolve, reject) =>{
    console.log("Prcessing order...") 
      setTimeout(() =>{
        const success = true;
        if(success){
          resolve({
            orderId:23456,
            customer:"Monami",
            item:"chicken burger",
            quantity: 2,
            total: 500,
          
          });
        }else
        {
          reject("Failed to process the order")
        }
        
      },3000);
  });
}

processOrder().then((data) => {

    console.log("Order Id: ", data.orderId)
    console.log("Customer name: ", data.customer)
    console.log("Item Name: ", data.item)
      console.log("Quantity: ", data.quantity)
    console.log("Total: ", data.total)
})
.catch((error) => {
  console.log(error);
})
.finally(() =>{
  console.log("order processing completed")
})