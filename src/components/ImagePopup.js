function ImagePopup({ onClose, isOpen , card}) {



  return (
    <div className={isOpen ? `popup popup_img  popup_opened` : `popup popup_img`}>
      <div className='popup__content'>
        <button type='button' className='popup__close cursor' onClick={onClose}></button>
        <form className='form form_img' action='#' method='get' name='img' noValidate>
          <img src='#' alt=''
            className='popup__image' />
          <h2 className='popup__name'>2</h2>
        </form>
      </div>
    </div>
  )
}
export default ImagePopup;