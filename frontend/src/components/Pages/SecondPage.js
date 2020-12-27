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
    <section className={`selected ${ props.selected === props.pageNumber && 'selected_active'}`}>
      <TopPageSection 
        decisionText={'Давайте начнем.'}
        questionText={'Где находится объект?'}
      />
      <PageQuestion 
        onClickBack={handleClickBack}
        onClickSelect={handleClickNext}
        categoryList={[{
          text: 'Дом',
          search: 'Дом'
        },
        {
          text: 'Двор',
          search: 'Двор'
        },
        {
          text: 'Улица',
          search: 'Улица'
        },
        {
          text: 'Общественное пространство',
          search: 'Общество'
        },
        {
          text: 'Транспорт',
          search: 'Транспорт'
        },
        {
          text: 'Гос. учреждения',
          search: 'Государство'
        }]}
      />
    </section>
  )
}

export default SecondPage;