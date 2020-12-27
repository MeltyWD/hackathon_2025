import TopPageSection from '../contents/TopPageSection';
import PageQuestion from '../contents/PageQuestion'

function SecondPage(props) {

  function handleClickBack() {
    props.selectedCategory('')
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
        categoryList={[{
          text: 'Дом',
          search: 'дом'
        },
        {
          text: 'Двор',
          search: 'двор'
        },
        {
          text: 'Улица',
          search: 'улица'
        },
        {
          text: 'Общественное пространство',
          search: 'окружение'
        },
        {
          text: 'Транспорт',
          search: 'повозка'
        },
        {
          text: 'Гос. учреждения',
          search: 'государство'
        }]}
      />
    </section>
  )
}

export default SecondPage;