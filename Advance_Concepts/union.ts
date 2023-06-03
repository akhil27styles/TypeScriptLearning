function orderProduct(orderId: string | number){
    console.log(`Your order with id${orderId}`)
}
orderProduct(1);
orderProduct("1");
//orderProduct({name:'foo'}); //Argument of type '{ name: string; }' is not assignable to parameter of type 'string | number'

