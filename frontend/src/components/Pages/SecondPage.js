import TopPageSection from '../contents/TopPageSection';
import PageQuestion from '../contents/PageQuestion'

function SecondPage(props) {

  function handleClickBack() {
    props.onClickPageChange(1)
  }

  function handleClickNext(text) {
    props.selectedCategory(text)
    props.onClickPageChange(3)
  }

  return (
    <section className={`page ${ props.selected === props.pageNumber && 'page_active'}`}>
      <TopPageSection 
        decisionText={'Давайте начнем.'}
        questionText={'Где находится объект?'}
      />
      <PageQuestion 
        onClickBack={handleClickBack}
        onClickSelect={handleClickNext}
        categoryList={[
          'Дом', 
          'Двор', 
          'Улица', 
          'Общественное пространство', 
          'Транспорт',
          'Гос. учреждения'
        ]}
      />
    </section>
  )
}

export default SecondPage;