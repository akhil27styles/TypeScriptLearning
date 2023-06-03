//typeof allows you to extract a type from a value
let fname='john';
//let name:typeof fname; //let name:string;
function getCharacter(){
    return {fname:'john',lname:'cena'}
}
type Character=ReturnType<typeof getCharacter>;
// this Character is equal to 
// type Character={fname:'john',lname:'cena'}