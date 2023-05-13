<template>
  <div class="root-wrapper">
    <div class="wrapper-header">
      <header class="header">
        <p class="header__title">QPICK</p>
        <div class="header__wrapper">
          <div class="header__wrapper-like">
            <p class="header__like-count">3</p>
            <img
              class="header__like"
              src="header-like.svg"
              alt="изображение сердечка - лайка"
            />
          </div>
          <div class="header__wrapper-like">
            <p class="header__basket-count">{{ counter }}</p>
            <img @click="$router.push('/basket')"
                 class="header__basket"
                 src="header-basket.svg"
                 alt="изображение корзины с товарами"
            />
          </div>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "v-header",
  computed: {
    ...mapGetters({
      g_cards: 'main/g_cards',

    }),
    counter() {
      return this.g_cards.reduce((acc, card) => acc + card.count, 0);
    }
  }
}
</script>

<style scoped lang="scss">
.root-wrapper {
  background: #e5e5e5;
}

.wrapper-header {
  max-width: 1440px;
  background: #eaeaea;
  margin: 0 auto;
}

.header {
  font-family: 'Montserrat', "Arial", sans-serif;
  background: #eaeaea;
  margin: 0 auto;
  max-width: 1135px;
  display: flex;
  justify-content: space-between;

  &__title {
    margin: 0;
    padding: 15px 0 15px 0;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #101010;
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__wrapper-like {
    position: relative;
  }

  &__like-count {
    border-radius: 50px;
    margin: 0;
    width: 18px;
    height: 18px;
    position: absolute;
    top: -9px;
    right: -12px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    background: orange;
  }

  &__basket-count {
    top: -7px;
    right: 20px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
    background: orange;
    border-radius: 50px;
    margin: 0;
    width: 18px;
    height: 18px;
    position: absolute;
  }

  &__like {
    cursor: pointer;
  }

  &__basket {
    cursor: pointer;
    margin: 0 35px 0 45px;
  }

}


</style>
