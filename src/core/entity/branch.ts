export class Branchs {
  constructor(
    public id: string,
    public branchName: string,
    public branchLocation: string,
    public createdAt: Date,
    public deletedAt
  ) {}

  static initialize({
    id,
    branchName,
    branchLocation,
    createdAt,
    deletedAt,
  }): Branchs {
    return new Branchs(id, branchName, branchLocation, createdAt, deletedAt);
  }
}
