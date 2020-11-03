export const reducer = (state: TransactionType, action: ActionType) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        transaction: [...state.transaction, action.payload],
      };
    }
    case "DELETE": {
      return {
        transaction: state.transaction.filter(
          (trans) => trans.id !== action.payload
        ),
      };
    }

    default:
      return state;
  }
};
