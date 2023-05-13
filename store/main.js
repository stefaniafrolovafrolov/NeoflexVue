export const state = () => ({
  cards: []
})

export const getters = {
  g_cards: (state) => {
    return state.cards
  },
}

export const mutations = {
  m_cards(state, payload) {
    state.cards = payload
  },
}
