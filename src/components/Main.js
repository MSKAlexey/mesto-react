import userAvatar from '../images/profile-image.jpg';

function Main({ handleEditAvatarClick, handleEditProfileClick, handleAddPlaceClick }) {
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__pencil">
          <img className="profile__image cursor" src={userAvatar} alt="Аватар пользователя" onClick={handleEditAvatarClick} />
        </div>
        <div className="profile__content">
          <div className="profile__name-buttom">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button type="button" className="profile__popup-open opacity cursor" onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button type="button" className="profile__vector opacity cursor" onClick={handleAddPlaceClick}></button>
      </section>
      <section className="places">
        <ul className="cards"></ul>
      </section>
    </main>
  )
}
export default Main;