import TopPageSection from '../contents/TopPageSection';
import PoemVariant from '../contents/PoemVariant'


function FivePage(props) {

  function handleClickBack() {
    props.onClickPageChange(4)
  }

  // function handleClickNext(text) {
  //   props.selectedCategory(text)
  //   props.onClickPageChange(5)
  // }

  return (
    <section className={`page ${ props.selected === props.pageNumber && 'page_active'}`}>
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
                author={poem.fields.author}
              />
            )}
          )}
        </div>
        <button onClick={handleClickBack} className="button button_options page-link">Назад</button>
      </div>
    </section>
  )
}

export default FivePage;