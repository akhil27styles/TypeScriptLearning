//Mapped types in TypeScript allow you to transform and manipulate the properties of an existing type 
//to create a new type. 
type User = {
    id: number;
    name: string;
    email: string;
    isAdmin: boolean;
  };
  
type SimplifiedUser={
    [P in keyof User as Exclude<P,'isAdmin'>]?:User[P];
}
  
  // SimplifiedUser will have the same properties as User, except 'isAdmin' will be removed and all other properties will be optional
  // SimplifiedUser = { id?: number; name?: string; email?: string; }
  const user:SimplifiedUser={
      id: 1,
      name: 'John',
      email: ""
  }
type StringIdUser={
    [P in keyof User as Exclude<P,'isAdmin'>]:P extends 'id'?string:User[P];
}
//changing type id number to string type
const user1:StringIdUser={
      id: "1",
      name: 'John',
      email: ""
}


interface CharacterType {
    playInActionMovie:()=>void;
    playInFantasyMovie:()=>void;
}
type toFlags<Type>={[Property in keyof Type]:boolean};
type CharacterTypeFeatures=toFlags<CharacterType>;
// type CharacterTypeFeatures={
// playInActionMovie:boolean;
// playInFantasyMovie:boolean;
// }

const Movie:CharacterTypeFeatures={
    playInActionMovie: false,
    playInFantasyMovie: false
}
