var menuSimple = {
    starter: "salad",
    dessert: "ice cream",
    drink: "coke",
};
function adjustMenu(menu, menuEntry, change) {
    menu[menuEntry] = change;
    console.log(menu, menuEntry, change);
}
adjustMenu(menuSimple, 'starter', 'pasta');
//adjustMenu(menuSimple,'pizza','pasta');
//Argument of type '"pizza"' is not assignable to parameter of type 'keyof Pizza'
