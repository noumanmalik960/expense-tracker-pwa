type TransactionType = {
  transaction: Transaction[];
};

type Transaction = {
  id: number;
  text: string;
  amount: number;
};

type ActionType =
  | { type: "ADD"; payload: Transactoin }
  | { type: "DELETE"; payload: number };
