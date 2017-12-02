const state = {
  cards: [
    {
      title: "Koupelna",
      devices: []
    },
    {
      title: "Světla",
      devices: []
    },
  ],
}

const getters = {
  allCards: state => state.cards,
}

const actions = {
  addCard({ commit }) {
    commit('ADD_CARD', {title: '', devices: []})
  }
}

const mutations = {
  ADD_CARD(state, card) {
    state.cards.push(card)
  },
  REMOVE_DEVICE(state, key) {
    delete state.cards[key]
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}