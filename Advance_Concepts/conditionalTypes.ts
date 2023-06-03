// In TypeScript, the T type parameter is commonly used as a placeholder to represent a generic type.
// It is not specific to any particular type and can be used to create reusable and flexible code that 
//can work with different types
interface StringId{
    id:string;
}
interface NumberId{
    id:number;
}
type Id<T>=T extends string?StringId:NumberId;
let idOne:Id<string>; 
let idTwo:Id<number>;
