let userName: string = "felipe";
let loggedIn: boolean = true;

userName += " muner";
console.log(userName);

let myNumber: number = 10;

let myRegex = /foo/;
const names: string[] = userName.split(" ");
const myValues: Array<number> = [1, 2, 3, 4];

interface Person {
  first: string;
  last: string;
}

const myObj: Person = { first: "", last: "" };

const ids: Record<number, string> = {
  10: "a",
  20: "b",
};

ids[30] = "c";
console.log(ids);
if (ids[30] === "D") {
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}


[1,2,3].forEach(el => {
  
});