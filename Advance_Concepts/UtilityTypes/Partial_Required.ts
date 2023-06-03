interface Movie{
    name:string;
    genre:string;
    year:number;
}
function hireActor(person:Partial<Movie>){

}
hireActor({
    name:'Iron man',
})
hireActor({
    genre:'action',
    year:2008
})

interface Movie2{
    name?:string;
    genre?:string;
    year:number;
}
// we make Required where all properties are required
function hireActress(person:Required<Movie2>){

}
hireActress({
    name: 'sone',
    genre: 'action',
    year: 0
})