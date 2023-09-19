export class Account {
  constructor(
    public id: number,
    public balance: number,
    public accountStatus: string,
    public accountType: string,
    public currency: string,
    public createdAt: Date,
    public deletedAt
  ) {}

  static initialize({
    id,
    balance,
    accountStatus,
    accountType,
    currency,
    createdAt,
    deletedAt,
  }): Account {
    return new Account(
      id,
      balance,
      accountStatus,
      accountType,
      currency,
      createdAt,
      deletedAt
    );
  }
}
