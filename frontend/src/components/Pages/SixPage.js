import TopPageSection from '../contents/TopPageSection';
import PoemVariant from '../contents/PoemVariant'


function SixPage(props) {

  function handleClickBack() {
    props.onClickPageChange(5)
    console.log(props.postSelect)
  }

  function handleClickNext(text) {
    props.selectedCategory(text)
    props.onClickPageChange(6)
  }

  return (
    <section className={`selected ${ props.selected === props.pageNumber && 'selected_active'}`}>
      <TopPageSection 
        decisionText={`> ${props.prevSelected.one} > ${props.prevSelected.two} > ${props.prevSelected.three}`}
        questionText={`Выбрана цитата`}
      />
      <div className="variants content">
        <div className="variants__container">
          <PoemVariant 
            text={props.postSelect}
            author={props.postSelectAuthor}
            selected={true}
          />
          <form className="variant__form">
            <label className="variant__label">
              <input className="variant__input" type="text" placeholder="Имя, фамилия" required />
            </label>
            <label className="variant__label">
              <input className="variant__input" type="text" placeholder="Адрес" required /></label>
            <label className="variant__label">
              <textarea className="variant__textarea" type="text" placeholder="Примечание (необязательно)"
                required></textarea></label>
            <div className="variant__buttons">
              <button className="button button_form page-link" type="submit">Отправить</button>
              <button className="button button_form page-link">Нет, я не готов</button>
            </div>
          </form>
        </div>
        <button onClick={handleClickBack} className="button button_account page-link">Назад</button>
      </div>
    </section>
  )
}

export default SixPage;