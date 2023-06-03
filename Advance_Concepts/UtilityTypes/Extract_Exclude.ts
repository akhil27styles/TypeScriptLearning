type Animal1 = "Dog" | "Cat" | "Bird" | "Fish";

type Mammal = Extract<Animal1, "Dog" | "Cat">;
// Mammal is "Dog" | "Cat"

type Animal2 = "Dog" | "Cat" | "Bird" | "Fish";

type NonMammal = Exclude<Animal2, "Dog" | "Cat">;
// NonMammal is "Bird" | "Fish"
