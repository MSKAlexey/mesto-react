import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main />
          <Footer />
        </div>
        {/* удаление карточки */}
        <div className="popup popup_remove" id="popup_remove">
          <div className="popup__container">
            <button type="button" className="popup__close cursor"></button>
            <form className="popup__form popup__form_type_remove" action="#" method="get" name="remove" noValidate>
              <h2 className="popup__title">Вы уверены?</h2>
              <button type="submit" name="button" className="popup__button cursor">Да</button>
            </form>
          </div>
        </div>
        {/* открытие картинки */}
        <div className="popup popup_img">
          <div className="popup__content">
            <button type="button" className="popup__close cursor"></button>
            <form className="form form_img" action="#" method="get" name="img" noValidate>
              <img src="https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg" alt=""
                className="popup__image" />
              <h2 className="popup__name">2</h2>
            </form>
          </div>
        </div>

        {/* template */}
        <template className="template" id="template">
          <li className="cards__item">
            <button type="button" className="cards__trash cursor"></button>
            <img src="#" alt="" className="cards__image" />
            <div className="cards__title-icon">
              <h2 className="cards__title">3</h2>
              <div className="cards_like-count">
                <button type="button" className="cards__icon cursor"></button>
                <div className="cards__count">0</div>
              </div>
            </div>
          </li>
        </template>

      </div >
    </>

  );

}

export default App;