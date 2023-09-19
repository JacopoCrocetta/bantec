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

  /**
   * Initialize and return a new Customer
   *
   * @param id
   * @param firstName
   * @param lastName
   * @param city
   * @param mobileNumber
   * @param panCardNumber
   * @param dob
   * @param createdAt
   * @param deletedAt
   * 
   * @returns A new object CUSTOMER
   *
   * @beta
   */
  static initialize({
    id,
    firstName,
    lastName,
    city,
    mobileNumber,
    panCardNumber,
    dob,
    createdAt,
    deletedAt,
  }): Customer {
    return new Customer(
      id,
      firstName,
      lastName,
      city,
      mobileNumber,
      panCardNumber,
      dob,
      createdAt,
      deletedAt
    );
  }
}
