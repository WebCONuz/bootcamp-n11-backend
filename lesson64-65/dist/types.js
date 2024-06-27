"use strict";
// Object Type ------------------------------------------------------------------------------
let lat = 2;
let lon = 3;
const myCordinate = { lat: 5, lon: 6 };
console.log("Coor: ", myCordinate);
function check(coord) {
    console.log(coord.lat);
}
const garfild = {
    name: "aaa",
};
console.log(garfild);
const myPishak = {
    name: "mallavoy",
    age: 3,
    tail: true,
    color: "sariq",
    isHomeAnimal: true,
};
console.log(myPishak);
const myCat = {
    name: "churban",
    age: 8,
    color: "sariq",
};
const rect = {
    lineWidth: 2,
    size: {
        width: 2,
        height: 3,
    },
};
rect.color = "blue";
rect.size.width = 6;
const rect2 = {
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
const css = {
    border: "1px solid red;",
    borderRadius: "5 px;",
    display: "flex",
};
console.log(css);
function connect(connection) {
    if (connection == "default") {
        console.log(connection.length);
    }
    else {
        console.log(connection.host);
    }
}
connect({ host: "localhost", port: 3000 });
connect("default");
// ENUM -------------------------------------------------------------------------------------
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1);
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
Direction1.Up;
Direction2.Right;
function position(a, b) {
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
function myLog(mes) {
    console.log(mes);
    if (typeof mes === "string") {
        console.log(mes.length);
    }
    return mes;
}
myLog({
    fistname: "Ali",
    age: 23,
}); // function myLog<string>(mes: string): string
myLog(23); // function myLog<number>(mes: number): number
myLog(true); // function myLog<boolean>(mes: boolean): boolean
// => Bunday holatda turni aniq ko'rsatish kerak, aks holda:
myLog("salom"); // function myLog<"salom">(mes: "salom"): "salom"
function myLog2(mes) {
    console.log(mes);
    return mes;
}
myLog2("satr");
myLog2(15);
myLog2(true);
// Bir necha tipli Generic -------------------------
function myArr(mes, arr) {
    console.log(mes);
    return arr;
}
myArr("Sonlar: ", [15, 23]);
function myStr(mes, arr) {
    console.log(mes.length);
    return arr;
}
myStr({ length: 15, isAdmin: true }, [15, 23]);
// Generic Amalda 2 ---------------------------------
const Numbers = [1, 2, 3];
const Strings = ["1", "2", "3"];
function reverse(array) {
    return array.reverse();
}
console.log(reverse(Numbers));
console.log(reverse(Strings));
// Generic Amalda 3 ---------------------------------
const promise = new Promise((resolve) => {
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
function mergeObj(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
const mergeObj1 = mergeObj({ user: "admin" }, { password: "qwerty" });
console.log(mergeObj1.password);
const mergeObj2 = mergeObj({ model: "BMW" }, { price: 152300 });
console.log(mergeObj2.price);
// Typeof -----------------------------------------------------------------------------------
let s1 = "Salom";
let s2;
let a = "lat";
let key;
key = "lat";
key = "lon";
//# sourceMappingURL=types.js.map