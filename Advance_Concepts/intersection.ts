interface Perosn{
    name:string,
    age:number
}
interface address{
    city:string
}
function getInfo(player:Perosn&address){

}
getInfo({
    name: 'john',
    age: 0,
    city: "usa"
})

// getInfo({
//     name: 'john',
//     age: 0,
// })
// Property city' is declared here.