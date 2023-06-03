// SimplifiedUser will have the same properties as User, except 'isAdmin' will be removed and all other properties will be optional
// SimplifiedUser = { id?: number; name?: string; email?: string; }
var user = {
    id: 1,
    name: 'John',
    email: ""
};
//changing type id number to string type
var user1 = {
    id: "1",
    name: 'John',
    email: ""
};
var Movie = {
    playInActionMovie: function () {
        return true;
    },
    playInFantasyMovie: function () {
        return 0;
    }
};
typeof Movie.playInFantasyMovie();
console.log(typeof Movie.playInFantasyMovie());
