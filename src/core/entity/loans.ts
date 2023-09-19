export class Loans {
  constructor(
    public id: number,
    public customer_id: number,
    public branch_id: number,
    public loan_amount: number,
    public date_issued: Date,
    public created_at: Date,
    public deleted_at: Date
  ) {}

  static initialize({
    id,
    customer_id,
    branch_id,
    loan_amount,
    date_issued,
    created_at,
    deleted_at,
  }) {
    return new Loans(
      id,
      customer_id,
      branch_id,
      loan_amount,
      date_issued,
      created_at,
      deleted_at
    );
  }
}
