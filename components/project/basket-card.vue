<template>
  <div class="basket__card">
    <button @click="$emit('removeCard', card)" class="basket__button-trash"></button>

    <p class="basket__sum-bottom">{{ card.priceSale ? card.priceSale : card.price }} ₽</p>

    <div class="basket__wrapper-block">
      <img
        class="basket__img"
        :src="card.img"
        alt="изображение наушников"
      />

      <div class="basket__block-count">
        <img @click="$emit('decreaseQuantity', card)"
             class="basket__button-minus"
             src="-.svg"
             alt="круглая кнопочка с минусом убавления"
        />
        <p class="basket__count">{{ card.count }}</p>
        <img @click="$emit('addQuantity', card)"
             class="basket__button-plus"
             src="+.svg"
             alt="круглая кнопочка с плюсом добавления"
        />
      </div>
    </div>

    <div class="basket__wrapper">
      <p class="basket__name">{{ card.title }}</p>
      <p class="basket__sum">{{ card.priceSale ? card.priceSale : card.price }} ₽</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "basket-card",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.basket {
  font-family: 'Montserrat', "Arial", sans-serif;

  &__card {
    margin-bottom: 25px;
    position: relative;
    display: flex;
    width: 633px;
    height: 218px;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 30px;
  }

  &__button-trash {
    cursor: pointer;
    position: absolute;
    padding: 0;
    top: 18px;
    right: 28px;
    object-fit: cover;
    background: transparent;
    border: none;
    background-image: url('https://stefaniafrolovafrolov.github.io/NeoflexVue/Trash.svg');
    width: 21px;
    height: 17px;
  }

  &__sum-bottom {
    position: absolute;
    margin: 0;
    bottom: 21px;
    right: 28px;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    color: #1c1c27;
  }

  &__img {
    margin: 18px 24px 0 19px;
    width: 147px;
    height: 136px
  }

  &__block-count {
    width: 126px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 17px 0 17px 17px;
  }

  &__button-minus {
    cursor: pointer;
    width: 35px;
    height: 30px;
  }

  &__count {
    margin: 0;
    font-weight: 600;
    font-size: 17px;
    line-height: 21px;
    color: #000000;
  }

  &__button-plus {
    cursor: pointer;
    width: 35px;
    height: 30px;
  }

  &__name {
    margin: 76px 0 12px 0;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    color: #1c1c27;
  }

  &__sum {
    margin: 0;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #aaaaaa;
  }
}
</style>
