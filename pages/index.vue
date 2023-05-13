<template>
  <div class="root">
    <div class="page">
      <main class="content">
        <h1 class="content__title">Наушники</h1>
        <section class="elements elements_margin">
          <contentCards v-for="card in wired" :key="card.id" :card="card" @processed="sendToBasket($event)"/>
        </section>
        <h1 class="content__title">Беспроводные наушники</h1>
        <section class="elements">
          <contentCards v-for="card in wireless" :key="card.id" :card="card" @processed="sendToBasket($event)"/>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import contentCards from '../components/project/content-cards'
import logics from "~/mixins/logics";

export default {
  name: 'IndexPage',
  mixins: [logics],
  components: {
    contentCards
  },
  data: () => ({
    cards: [
      {
        id: 1,
        isWireless: false,
        img: '/Apple-AirPods.png',
        title: 'Apple BYZ S852I',
        src: '/element-star.svg',
        priceSale: 2927,
        price: 3527
      },
      {
        id: 2,
        isWireless: false,
        img: '/Apple-EarPods.png',
        title: 'Apple EarPods',
        src: '/element-star4.5.svg',
        priceSale: 0,
        price: 2327
      },
      {
        id: 3,
        isWireless: false,
        img: '/Apple-EarPods-2.png',
        title: 'Apple EarPods',
        src: '/element-star4.5.svg',
        priceSale: 0,
        price: 2327
      },
      {
        id: 4,
        isWireless: false,
        img: '/Apple-BYZ-S852.png',
        title: 'Apple BYZ S852I',
        src: '/element-star.svg',
        priceSale: 0,
        price: 2927
      },
      {
        id: 5,
        isWireless: false,
        img: '/Apple-EarPods.png',
        title: 'Apple BYZ S852I',
        src: '/element-star4.5.svg',
        priceSale: 0,
        price: 2327
      },
      {
        id: 6,
        isWireless: false,
        img: '/Apple-EarPods-2.png',
        title: 'Apple BYZ S852I',
        src: '/element-star4.5.svg',
        priceSale: 0,
        price: 2927
      },
      {
        id: 7,
        isWireless: true,
        img: '/Apple-AirPods.png',
        title: 'Apple AirPods',
        src: '/element-star.svg',
        priceSale: 0,
        price: 9527
      },
      {
        id: 8,
        isWireless: true,
        img: '/GERLAX-GH-04.png',
        title: 'GERLAX GH-04',
        src: '/element-star.svg',
        priceSale: 0,
        price: 6527
      },
      {
        id: 9,
        isWireless: true,
        img: '/BOROFONE-BO4.png',
        title: 'BOROFONE BO4',
        src: '/element-star.svg',
        priceSale: 0,
        price: 7527
      },
    ]
  }),
  computed: {
    wired() {
      return this.cards.filter(obj => !obj.isWireless)
    },
    wireless() {
      return this.cards.filter(obj => obj.isWireless)
    },
  },
  methods: {
    sendToBasket(card) {
      let index = this.findCardIndex(card)
      index !== -1 ? this.cloneArray[index].count++ : (card.count = 1, this.cloneArray.push(card))
      this.m_cards(this.cloneArray)
      localStorage.setItem('myArray', JSON.stringify(this.g_cards));
    }
  }
}
</script>
<style scoped lang="scss">
.content {

  &__title {
    margin: 25px 0 0 0;
    max-width: 567px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #838383;
  }

}

.elements {
  margin: 0 auto;
  max-width: 1110px;
  padding: 20px 0 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;

  &_margin {
    padding-bottom: 5px;
  }

}

.root {
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.page {
  font-family: "Montserrat", Arial, sans-serif;
  background: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 1440px;
  height: 100%;
}


</style>
