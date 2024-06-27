abstract class User {
  constructor(
    protected fullname: string,
    readonly email: string,
    private _password: string,
    public age: number
  ) {}

  getData() {
    console.log({
      fullname: this.fullname,
      email: this.email,
      age: this.age,
    });
  }
}

class Admin extends User {
  constructor(
    fullname: string,
    email: string,
    _password: string,
    age: number,
    readonly role: string,
    private isSuperAdmin: boolean
  ) {
    super(fullname, email, _password, age);
  }

  override getData() {
    console.log({
      fullname: this.fullname,
      email: this.email,
      age: this.age,
      isSuperAdmin: this.isSuperAdmin,
    });
  }
}

const admin = new Admin(
  "Samad",
  "samad@gmail.com",
  "123456",
  25,
  "admin",
  true
);
admin.getData();
