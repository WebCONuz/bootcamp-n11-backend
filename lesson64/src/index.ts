// Object Type ------------------------------------------------------------------------------

type LatLon = { lat: number; lon: number };
let lat = 2;
let lon = 3;

const myCordinate: LatLon = { lat: 5, lon: 6 };
console.log("Coor: ", myCordinate);

// INTERFACE --------------------------------------------------------------------------------

interface ICoord {
  lat: number;
  lon: number;
}

interface ICoord {
  length: number;
}

function check(coord: ICoord) {
  console.log(coord.lat);
}

interface IMushuksimon {
  name: string;
  age?: number; // bu hususiyatni berish majburish emas
}

const garfild: IMushuksimon = {
  name: "aaa",
};
console.log(garfild);

interface IPishak extends IMushuksimon {
  color: string;
  tail?: boolean | undefined;
}

interface IPishak {
  isHomeAnimal: boolean;
}

const myPishak: IPishak = {
  name: "mallavoy",
  age: 3,
  tail: true,
  color: "sariq",
  isHomeAnimal: true,
};
console.log(myPishak);

type Animal = {
  name: string;
  age?: number;
};
type Cat = Animal & {
  color: string;
  tail?: boolean;
};
const myCat: Cat = {
  name: "churban",
  age: 8,
  color: "sariq",
};

interface IRect {
  readonly lineWidth: number;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect: IRect = {
  lineWidth: 2,
  size: {
    width: 2,
    height: 3,
  },
};
rect.color = "blue";
rect.size.width = 6;
// rect.lineWidth = 26; /=> Error, because readonly

interface IRectArea extends IRect {
  getArea: (x: number) => number;
}

const rect2: IRectArea = {
  lineWidth: 20,
  size: {
    width: 20,
    height: 30,
  },
  getArea(x) {
    return this.size.width * this.size.height;
  },
};
console.log(rect2.getArea(12));

interface IStyle {
  [key: string]: string;
}

const css: IStyle = {
  border: "1px solid red;",
  borderRadius: "5 px;",
  display: "flex",
};
console.log(css);

interface IConnection {
  host: string;
  port: number;
}
function connect(connection: IConnection | "default") {
  if (connection == "default") {
    console.log(connection.length);
  } else {
    console.log(connection.host);
  }
}
connect({ host: "localhost", port: 3000 });
connect("default");

// ENUM -------------------------------------------------------------------------------------

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}
console.log(Direction1);

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

Direction1.Up;
Direction2.Right;

// FUNCTION ---------------------------------------------------------------------------------

interface IPosition {
  x?: number;
  y?: number;
}

function position(): IPosition;
function position(a: number): IPosition;
function position(a: number, b: number): IPosition;
function position(a?: number, b?: number) {
  if (!a && !b) {
    console.log("salom");
    return { x: undefined, y: undefined };
  }
  if (a && !b) {
    console.log("salom");
    return { x: a, y: undefined };
  }
  return { x: a, y: b };
}

position();

// ------------------------------------------------------------------------------------------
// GENERIC ----------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

function myLog<T>(mes: T): T {
  console.log(mes);
  if (typeof mes === "string") {
    console.log(mes.length);
  }
  return mes;
}
type userType = {
  fistname: string;
  age: number;
};

myLog<userType>({
  fistname: "Ali",
  age: 23,
}); // function myLog<string>(mes: string): string
myLog<number>(23); // function myLog<number>(mes: number): number
myLog<boolean>(true); // function myLog<boolean>(mes: boolean): boolean

// => Bunday holatda turni aniq ko'rsatish kerak, aks holda:
myLog("salom"); // function myLog<"salom">(mes: "salom"): "salom"

function myLog2(mes: any): any {
  console.log(mes);
  return mes;
}
myLog2("satr");
myLog2(15);
myLog2(true);

// Bir necha tipli Generic -------------------------

function myArr<T, K>(mes: T, arr: K[]): K[] {
  console.log(mes);
  return arr;
}
myArr<string, number>("Sonlar: ", [15, 23]);

// Generic Amalda 1 ---------------------------------

interface ILength {
  length: number;
}
function myStr<T extends ILength, K>(mes: T, arr: K[]): K[] {
  console.log(mes.length);
  return arr;
}
type usert = { length: number; isAdmin: boolean };
myStr<usert, number>({ length: 15, isAdmin: true }, [15, 23]);

// Generic Amalda 2 ---------------------------------

const Numbers: Array<number> = [1, 2, 3];
const Strings: Array<string> = ["1", "2", "3"];
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
console.log(reverse(Numbers));
console.log(reverse(Strings));

// Generic Amalda 3 ---------------------------------

const promise = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(77);
  }, 2000);
});
promise.then((data) => {
  console.log(data.toFixed());
});

// console.log(1 + "1");
// console.log(1 + true);
// console.log(true + false);
// console.log("2" / 2);

// Generic Amalda 4 ---------------------------------

// Generic funksiya qaytaradigan obyekt va uning hususiyatlarini eslab qoladi.
function mergeObj<T extends object, K extends object>(obj1: T, obj2: K) {
  return Object.assign({}, obj1, obj2);
}
const mergeObj1 = mergeObj({ user: "admin" }, { password: "qwerty" });
console.log(mergeObj1.password);
const mergeObj2 = mergeObj({ model: "BMW" }, { price: 152300 });
console.log(mergeObj2.price);

// Typeof -----------------------------------------------------------------------------------

let s1 = "Salom";
let s2: typeof s1;

// Keyof ------------------------------------------------------------------------------------

type Coords = {
  lat: number;
  lon: number;
};

type P = keyof Coords; // [lat, lon]
let a: P = "lat";
// let b: P = "Loodds"; Error only "lat" or "lon"

interface ICoords1 {
  lat: number;
  lon: number;
}

type P1 = keyof ICoords1;
let key: P1;
key = "lat";
key = "lon";
