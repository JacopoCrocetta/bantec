export class Transaction {
  constructor(
    public id: number,
    public account_id: number,
    public customer_id: number,
    public balance: number,
    public account_status: string,
    public account_type: string,
    public currency: string,
    public created_at: Date,
    public deleted_at: Date
  ) {}
}
