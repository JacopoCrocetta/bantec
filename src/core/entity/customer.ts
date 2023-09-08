export class Customer {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public city: string,
    public mobileNumber: string,
    public panCardNumber: string,
    public dob: string,
    public createdAt: Date,
    public deletedAt
  ) {}


  static initialize({
     id,
     firstName,
     lastName,
     city,
     mobileNumber,
     panCardNumber,
     dob,
     createdAt,
     deletedAt
  }):Customer{
    return new Customer(id,
      firstName,
      lastName,
      city,
      mobileNumber,
      panCardNumber,
      dob,
      createdAt,
      deletedAt);
  }
}
