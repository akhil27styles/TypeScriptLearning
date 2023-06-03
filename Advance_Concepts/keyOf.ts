// The keyof operator takes the keys of an interface or an object and produces a union type.
interface Pizza{
    starter:string;
    dessert:string;
    drink:string;
}
type PizzaKey=keyof Pizza; //'starter' | 'dessert' | 'drink'
const menuSimple:Pizza={
    starter:"salad",
    dessert:"ice cream",
    drink:"coke",
}
function adjustMenu(menu:Pizza,menuEntry :keyof Pizza,change:string){
 menu[menuEntry]=change;
 console.log(menu,menuEntry,change);
}
adjustMenu(menuSimple,'starter','pasta');
//adjustMenu(menuSimple,'pizza','pasta');
//Argument of type '"pizza"' is not assignable to parameter of type 'keyof Pizza'