function PopupWithForm({name, title, buttonText}) {
  return(
    <div className={`popup popup_${name}`}>
    <div className="popup__container">
      <button type="button" className="popup__close cursor"></button>
      <form className="popup__form popup__form_type_avatar" action="#" method="get" name="avatar" noValidate>
        <h2 className="popup__title">{title}</h2>
        <input
          id="input-link-type-avatar"
          className="popup__input popup__input_type_link"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          required />
        <span id="input-link-type-avatar-error" className="error"></span>
        <button type="submit" name="button" className="popup__button cursor">{buttonText}</button>
      </form>
    </div>
  </div>
  )
}
export default PopupWithForm;