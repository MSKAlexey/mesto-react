function PopupWithForm({ name, title, buttonText, children }) {
  return (
    <div className={`popup popup_${name}`}>
      <div className='popup__container'>
        <button type='button' className='popup__close cursor'></button>
        <form className={`popup__form popup__form_type_${name}`} action='#' method='get' name={name} noValidate>
          <h2 className='popup__title'>{title}</h2>
          {children}
          <button type='submit' name='button' className='popup__button cursor'>{buttonText}</button>
        </form>
      </div>
    </div>
  )
}
export default PopupWithForm;