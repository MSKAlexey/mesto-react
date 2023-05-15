function ImagePopup() {

  

  return (
    <div className='popup popup_img'>
      <div className='popup__content'>
        <button type='button' className='popup__close cursor'></button>
        <form className='form form_img' action='#' method='get' name='img' noValidate>
          <img src='https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg' alt=''
            className='popup__image' />
          <h2 className='popup__name'>2</h2>
        </form>
      </div>
    </div>
  )
}
export default ImagePopup;