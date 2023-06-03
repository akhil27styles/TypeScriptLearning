//infer keyword is used in conditional types to infer the type of a type parameter based on the structure 
//of another type. It allows you to create more flexible and reusable type transformations.

type ElementType<T> = T extends Array<infer E> ? E : never;

type MyArray = number[];

type MyArrayElementType = ElementType<MyArray>;
// MyArrayElementType is number
//In this example, we have a conditional type ElementType that takes a type parameter T. 
//It checks if T is assignable to an array type (T extends Array<infer E>). If it matches,
// the type parameter E is inferred as the element type of the array, and that becomes the resulting
// type of the conditional type (E). Otherwise, it falls back to never.

type flattenArrayType<T>=T extends Array<infer ArrayType>?ArrayType:T;
type foo=flattenArrayType<string[]>
//type foo=string
type bar=flattenArrayType<number[]>
//type bar=number
type baz=flattenArrayType<number>
//type baz=number
//T extends Array<infer ArrayType> checks if T extends an Array.
// Furthermore, we use the infer keyword to get a hold of the array typ