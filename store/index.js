import { v4 as uuidv4 } from "uuid";


export const state = () => ({
  fooddata: [],
  cart: []
});

export const getters = {
  totalPrice: state => {
    if (!state.cart.length) return 0
    return state.cart.reduce((accumulator, next) => accumulator + +next.combinedPrice, 0)
  },
  cartCount: state => {
    return state.cart.length
  }
}

export const mutations = {
  updateFoodData: (state, data) => {
    state.fooddata = data
  },
  addToCart(state, formOutput) {
    formOutput.id = uuidv4()
    state.cart.push(formOutput)
  }
}
// we get our data in actions and set it to state
export const actions = {
  async getFoodData({ state, commit }) {
    if (state.fooddata.length) {
      return
    }
    try {
      await fetch(
        "https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants",
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.AWS_API_KEY
          }
        }
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // committing our mutation here
          commit('updateFoodData', data)
        });

      // https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants
      //
    } catch (err) {
      console.log(err);
    }
  }
};
