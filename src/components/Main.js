import React from 'react';
import api from '../utils/Api';

// import userAvatar from '../images/profile-image.jpg';

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        console.log(initialCards);
        setCards(initialCards.map(item => ({
          id: item._id,
          link: item.link,
          name: item.name,
          likes: item.likes,
          // onCardClick: onCardClick,
        })));
      })
      .catch((err) => {
        console.log(err, "ошибка при загрузке страницы");
      });
  }, []); 

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__pencil">
          <img
            className="profile__image cursor"
            src={userAvatar} alt="Аватар пользователя"
            onClick={onEditAvatar}
          />
        </div>
        <div className="profile__content">
          <div className="profile__name-buttom">
            <h1 className="profile__title">{userName}</h1>
            <button
              type="button"
              className="profile__popup-open opacity cursor"
              onClick={onEditProfile}
            ></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__vector opacity cursor"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="places">
        <ul className="cards">
        {cards.map(({ id, ...props }) => (
             <Card key={id} {...props} handleCardClick />
          ))}
        </ul>
      </section>
    </main>
  )
}
export default Main;