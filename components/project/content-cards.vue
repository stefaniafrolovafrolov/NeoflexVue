<template>
  <main class="content">
    <div class="element">
      <img class="element__image" :src="card.img" alt="изображение наушников">
      <div class="element__bottom-container">
        <div class="element__wrapper-left">
          <p class="element__title">{{ card.title }}</p>
          <img
            class="element__star"
            :src="card.src"
            alt="изображение звезд - оценки качества товара"
          />
        </div>
        <div class="element__wrapper-right">
          <div>
            <p class="element__sum">{{ card.priceSale ? card.priceSale : card.price }} ₽</p>
            <p v-if="card.priceSale" class="element__sum-two">{{ card.price }} ₽</p>
          </div>
          <button @click="$emit('processed', card)" class="element__button-buy">Купить</button>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: "content-cards",
  props: {
    card: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped lang="scss">
.element {
  font-family: 'Montserrat', "Arial", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 407px;
  width: 350px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  box-sizing: border-box;

  &__image {
    max-width: 220px;
    min-height: 238px;
    object-fit: cover;
    margin: 15px 0 54px 0;
  }

  &__bottom-container {
    display: flex;
    justify-content: space-between;
    width: 310px;
    min-height: 75px;
  }

  &__wrapper-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    margin: 0;
    max-width: 144px;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #1c1c27;
  }

  &__star {
    width: 60.33px;
    height: 21.97px;
  }

  &__wrapper-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__sum {
    margin: 0;
    max-width: 59px;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #ffa542;
  }

  &__sum-two {
    margin: 0;
    max-width: 44px;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    text-decoration-line: line-through;
    color: #ffce7f;
  }

  &__button-buy {
    cursor: pointer;
    padding: 0;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #000000;
    background-color: transparent;
    border: none;
  }

}

</style>
