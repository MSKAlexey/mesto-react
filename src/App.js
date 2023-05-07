function App() {
  return (
    <body class="page">
      <div className="page__container">

        <header className="header">
          <img className="c" src="=require('./images/logo.svg')" alt="Надпись на латинице: Место и Россия" />
        </header>

        <main className="main">

          <section className="profile">
            <div className="profile__pencil">
              <img className="profile__image cursor" src="require('./images/profile-image.jpg')" alt="Аватар пользователя" />
            </div>
            <div className="profile__content">
              <div className="profile__name-buttom">
                <h1 className="profile__title">1</h1>
                <button type="button" className="profile__popup-open opacity cursor"></button>
              </div>
              <p className="profile__subtitle"></p>
            </div>
            <button type="button" className="profile__vector opacity cursor"></button>
          </section>

          <section className="places">
            <ul className="cards"></ul>
          </section>

        </main>

        <footer className=" footer">
          <p className="footer__copyright">© 2020 Mesto Russia</p>
        </footer>

      </div>
      {/* popups */}
      {/* редактирование профиля */}
      <div className="popup popup_edit" id="popup_edit">
        <div className="popup__container">
          <button type="button" className="popup__close cursor"></button>
          <form className="popup__form popup__form_type_edit" action="#" method="get" name="edit" novalidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <input
              id="input-name"
              className="popup__input popup__input_type_name"
              placeholder="Введите имя"
              type="text"
              name="title"
              minlength="2"
              maxlength="40"
              required />
            <span id="input-name-error" class="error"></span>
            <input
              id="input-about"
              className="popup__input popup__input_type_about"
              placeholder="Введите род деятельности"
              name="about"
              type="text"
              minlength="2"
              maxlength="200"
              required />
            <span id="input-about-error" className="error"></span>
            <button type="submit" name="button" className="popup__button cursor">Сохранить</button>
          </form>
        </div>
      </div>
      {/* добавление карточки */}
      <div className="popup popup_add" id="popup_add">
        <div className="popup__container">
          <button type="button" className="popup__close cursor"></button>
          <form className="popup__form popup__form_type_add" action="#" method="get" name="add" novalidate>
            <h2 className="popup__title">Новое место</h2>
            <input
              id="input-title"
              className="popup__input popup__input_type_title"
              type="text"
              name="name"
              placeholder="Название"
              minlength="2"
              maxlength="30"
              required />
            <span id="input-title-error" class="error"></span>
            <input
              id="input-link"
              className="popup__input popup__input_type_link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required />
            <span id="input-link-error" className="error"></span>
            <button type="submit" name="button" className="popup__button cursor">Создать</button>
          </form>
        </div>
      </div>
      {/* удаление карточки */}
      <div className="popup popup_remove" id="popup_remove">
        <div className="popup__container">
          <button type="button" className="popup__close cursor"></button>
          <form className="popup__form popup__form_type_remove" action="#" method="get" name="remove" novalidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button type="submit" name="button" className="popup__button cursor">Да</button>
          </form>
        </div>
      </div>
      {/* открытие картинки */}
      <div className="popup popup_img">
        <div className="popup__content">
          <button type="button" className="popup__close cursor"></button>
          <form className="form form_img" action="#" method="get" name="img" novalidate>
            <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" alt=""
              className="popup__image" />
            <h2 className="popup__name">2</h2>
          </form>
        </div>
      </div>
      {/* редактирование аватара */}
      <div className="popup popup_avatar" id="popup_avatar">
        <div className="popup__container">
          <button type="button" className="popup__close cursor"></button>
          <form className="popup__form popup__form_type_avatar" action="#" method="get" name="avatar" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input
              id="input-link-type-avatar"
              class="popup__input popup__input_type_link"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              required />
            <span id="input-link-type-avatar-error" className="error"></span>
            <button type="submit" name="button" className="popup__button cursor">Сохранить</button>
          </form>
        </div>
      </div>
      {/* template */}
      <template className="template" id="template">
        <li className="cards__item">
          <button type="button" className="cards__trash cursor"></button>
          <img src="#" alt="" class="cards__image" />
          <div className="cards__title-icon">
            <h2 className="cards__title">3</h2>
            <div className="cards_like-count">
              <button type="button" className="cards__icon cursor"></button>
              <div className="cards__count">0</div>
            </div>
          </div>
        </li>
      </template>

    </body >


  );
}

export default App;
