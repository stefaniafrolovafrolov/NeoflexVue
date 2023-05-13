import {mapGetters, mapMutations} from "vuex";

export default {
  mounted() {
    if (!this.g_cards.length && localStorage.getItem('myArray')) {
      this.m_cards(JSON.parse(localStorage.getItem('myArray')))
    }
  },
  computed: {
    ...mapGetters({
      g_cards: 'main/g_cards',
    }),
    cloneArray() {
      return JSON.parse(JSON.stringify(this.g_cards))
    },
  },
  methods: {
    ...mapMutations({
      m_cards: 'main/m_cards',
    }),
    findCardIndex(card) {
      return this.g_cards.findIndex(el => el.id === card.id)
    },

  }
}
