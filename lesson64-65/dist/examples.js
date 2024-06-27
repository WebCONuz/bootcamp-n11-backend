"use strict";
class User {
    constructor(fullname, email, _password, age) {
        this.fullname = fullname;
        this.email = email;
        this._password = _password;
        this.age = age;
    }
    getData() {
        console.log({
            fullname: this.fullname,
            email: this.email,
            age: this.age,
        });
    }
}
class Admin extends User {
    constructor(fullname, email, _password, age, role, isSuperAdmin) {
        super(fullname, email, _password, age);
        this.role = role;
        this.isSuperAdmin = isSuperAdmin;
    }
    getData() {
        console.log({
            fullname: this.fullname,
            email: this.email,
            age: this.age,
            isSuperAdmin: this.isSuperAdmin,
        });
    }
}
const admin = new Admin("Samad", "samad@gmail.com", "123456", 25, "admin", true);
admin.getData();
//# sourceMappingURL=examples.js.map