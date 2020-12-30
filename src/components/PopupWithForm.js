import React from 'react';

function PopupWithForm({isOpen,onClose,formName,formId,title,children,submitButtonText, onSubmit, isLoading}){
    return(
         <section className={`popup ${isOpen && 'popup_opened'}`}>
          <div className="popup__background"></div>
          <form onSubmit={onSubmit} className={`popup__form popup__form_type_${formName}`} name={formName} id={formId}>
            <button type="reset" className="popup__button" onClick={onClose}></button>
            <h2 className="popup__title">{title}</h2>
            <button type="submit" className={`popup__submit ${
            isLoading && 'popup__submit'
          }`} 
          >{isLoading ? `Сохранение...` : submitButtonText}</button>
            {children}
          </form>
      </section>
    )

}

export default PopupWithForm;