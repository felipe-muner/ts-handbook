function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}
printIngredient("1c", "flour");
printIngredient("1c", "sugar", "something more");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!; //not good
  }
  return "do not have";
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? "dont"; // better
}

function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.()
  // if(callback){
  //   callback()
  // }
}
