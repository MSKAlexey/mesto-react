function Card({ card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className='cards__item'>
      <button type='button' className='cards__trash cursor'></button>
      <img
      src={card.link}
      alt={card.name}
      className='cards__image'
      onClick={handleClick}
      />
      <div className='cards__title-icon'>
        <h2 className='cards__title'>{card.name}</h2>
        <div className='cards_like-count'>
          <button type='button' className='cards__icon cursor'></button>
          <div className='cards__count'>0</div>
        </div>
      </div>
    </li>
  )
}
export default Card;