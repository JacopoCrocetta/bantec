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
}
