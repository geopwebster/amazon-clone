export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// maps through the basket & tally the total

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as its not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    // return{
    //   ...state,
    //   basket: state.basket.filter(item=>item.id !==action.id)
    // } //THIS DOES NOT WORK. IT WILL REMOVE ALL ITEMS WITH THE SAME ID (MULTIPLE ITEMS)

    default:
      return state;
  }
};

export default reducer;
