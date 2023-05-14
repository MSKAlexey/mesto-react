import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, cards, onCardClick }) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");

  React.useEffect(() => {
    api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch(err => console.log(err));
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
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}
export default Main;