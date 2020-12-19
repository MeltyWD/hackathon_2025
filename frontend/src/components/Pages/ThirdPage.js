import TopPageSection from '../contents/TopPageSection';
import PageQuestion from '../contents/PageQuestion'

function ThirdPage(props) {

  function handleClickBack() {
    props.onClickPageChange(2)
  }

  function handleClickNext(text) {
    props.selectedCategory(text)
    props.onClickPageChange(4)
  }

  return (
    <section className={`page ${ props.selected === props.pageNumber && 'page_active'}`}>
      <TopPageSection 
        decisionText={`> ${props.prevSelected}`}
        questionText={'В чем суть проблемы?'}
      />
      <PageQuestion 
        onClickBack={handleClickBack}
        onClickSelect={handleClickNext}
        categoryList={[
          'Освещение', 
          'Состояние', 
          'Безопасность', 
          'Знаки и разметка', 
          'Остановки',
          'Реклама'
        ]}
      />
    </section>
  )
}

export default ThirdPage;