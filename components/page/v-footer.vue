<template>
  <div class="root-wrapper">
    <div class="wrapper-footer">
      <footer class="footer">
        <p class="footer__title">QPICK</p>
        <div class="footer__links">
          <nav class="footer__nav">
            <p class="footer__nav-text">Избранное</p>
            <p class="footer__nav-text">Корзина</p>
            <p class="footer__nav-text">Контакты</p>
          </nav>
          <div class="footer__wrapper">
            <p class="footer__nav-text">Условия сервиса</p>
            <div class="footer__lang">
              <img
                class="footer__globe"
                src="/footer-globe.svg"
                alt="изображение глобуса"
              />
              <button class="footer__button-ru">Pyc</button>
              <button class="footer__button-en">Eng</button>
            </div>
          </div>
        </div>
        <div class="footer__social">
          <img
            class="footer__social-icon"
            src="/VK.svg"
            alt="иконка вконтакте"
          />
          <img
            class="footer__social-icon"
            src="/Telegram.svg"
            alt="иконка телеграм"
          />
          <img
            class="footer__social-icon"
            src="/Whatsapp.svg"
            alt="иконка ватсап"
          />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-footer"
}
</script>

<style scoped lang="scss">
.root-wrapper {
  background: #e5e5e5;
}

.wrapper-footer {
  max-width: 1440px;
  background: #eaeaea;
  margin: 0 auto;
}

.footer {
  font-family: 'Montserrat', "Arial", sans-serif;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0px 0px;
  width: 1110px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    margin: -56px 0 0 28px;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;
    color: #101010;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    width: 427px;
    height: 82px;
    margin-top: 7px;
  }

  &__nav {
    margin-left: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__nav-text {
    cursor: pointer;
    margin: 0;
    max-width: 152px;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #000000;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__lang {
    width: 111px;
    display: flex;
    justify-content: space-between;

  }

  &__globe {
    cursor: pointer;
    width: 17px;
    height: 17px;
    object-fit: cover;
  }

  &__button-ru {
    cursor: pointer;
    padding: 0;
    background: transparent;
    border: none;
    max-width: 26px;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffa542;
  }

  &__button-en {
    cursor: pointer;
    padding: 0;
    background: transparent;
    border: none;
    max-width: 31px;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #101010;
  }

  &__social {
    cursor: pointer;
    margin: 29px 26px 90px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 126px;
    height: 30px;
  }

}


</style>
