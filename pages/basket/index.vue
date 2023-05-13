<template>
  <div class="root-wrapper">
    <div class="wrapper-basket">
      <div class="root">
        <div class="page">
          <main class="basket">
            <h1 class="basket__title">Корзина</h1>
            <div class="basket__container">
              <div class="basket__overlay-card">
                <basket-card v-for="card in g_cards" :key="card.id" :card="card" @removeCard="remove($event)"
                             @decreaseQuantity="quantityChange( 'decrease',$event)"
                             @addQuantity="quantityChange('add',$event)"/>
              </div>
              <div class="total">
                <div class="total__wrapper-price">
                  <p class="total__title">ИТОГО</p>
                  <p class="total__price">₽ {{ totalPrice }}</p>
                </div>
                <button class="total__button">Перейти к оформлению</button>
              </div>
            </div>
          </main>
        </div>
      </div>


    </div>
  </div>

</template>


<script>
import BasketCard from "../../components/project/basket-card";
import logics from "~/mixins/logics";

export default {
  name: "index",
  mixins: [logics],
  components: {BasketCard},

  computed: {
    totalPrice() {
      return this.g_cards.reduce((acc, card) => acc + (card.priceSale !== 0 ? card.priceSale : card.price) * card.count, 0);
    },
  },
  methods: {
    remove(card) {
      let index = this.findCardIndex(card)
      if (index !== -1) {
        this.cloneArray.splice(index, 1)
        this.cloneArray.length ? localStorage.setItem('myArray', JSON.stringify(this.cloneArray)) : localStorage.removeItem('myArray');
        this.m_cards(this.cloneArray)
      }
    },
    quantityChange(action, card) {
      let index = this.findCardIndex(card)
      if (index !== -1) {
        action === 'add' ? this.cloneArray[index].count++ : this.cloneArray[index].count > 1 ? this.cloneArray[index].count-- : this.cloneArray[index].count
        localStorage.setItem('myArray', JSON.stringify(this.cloneArray));
        this.m_cards(this.cloneArray)
      }
    }
  },

}
</script>

<style scoped lang="scss">

.root-wrapper {
  background: #e5e5e5;
}

.wrapper-basket {
  max-width: 1440px;
  background: #eaeaea;
  margin: 0 auto;
}

.root {
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.basket {
  width: 1120px;
  background: #EAEAEA;
  margin: 0 auto;

  &__title {
    margin-top: 15px;
    max-width: 326.99px;
    margin-left: 15px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #1C1C27;
  }

  &__container {
    display: flex;
    justify-content: space-between;
    width: 1109px;
    margin: 0 auto 380px;
  }

  &__overlay-card {
    display: flex;
    flex-direction: column;
  }

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

.total {
  width: 348.98px;
  height: 114px;
  background: #FFFFFF;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  &__wrapper-price {
    display: flex;
    justify-content: space-between;
  }

  &__title {
    margin: 22px 0 15px 21px;
    max-width: 56.12px;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }

  &__price {
    margin: 22px 16px 16px 0;
    max-width: 97.14px;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
  }

  &__button {
    cursor: pointer;
    width: 348.98px;
    height: 65px;
    background: #101010;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
  }

}


</style>
