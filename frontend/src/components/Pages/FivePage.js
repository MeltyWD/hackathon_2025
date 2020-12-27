import TopPageSection from '../contents/TopPageSection';
import PoemVariant from '../contents/PoemVariant'


function FivePage(props) {

  function handleClickBack() {
    props.onClickPageChange(4)
  }

  function handleClickNext(text, author) {
    const data = {
      text: text,
      author: author
    }
    props.selectedCategory(data)
    props.onClickPageChange(6)
  }

  return (
    <section className={`selected ${ props.selected === props.pageNumber && 'selected_active'}`}>
      <TopPageSection 
        decisionText={`> ${props.prevSelected.one} > ${props.prevSelected.two} > ${props.prevSelected.three}`}
        questionText={`Выберите одну из ${props.poemList.length} найденных цитат`}
      />
      <div className="variants content">
        <div className="variants__container">
          {props.poemList.map((poem, index) => {
            const poemLines = poem.fields.text.split(/\r?\n/);
            return (
              <PoemVariant 
                key={index}
                text={poemLines}
                onSelect={handleClickNext}
                author={poem.fields.author}
                selected={false}
              />
            )}
          )}
        </div>
        <button onClick={handleClickBack} className="button button_account page-link">Назад</button>
      </div>
    </section>
  )
}

export default FivePage;