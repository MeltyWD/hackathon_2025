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
          search: 'dom'
        },
        {
          text: 'Двор',
          search: 'dvor'
        },
        {
          text: 'Улица',
          search: 'ulica'
        },
        {
          text: 'Общественное пространство',
          search: 'obshestvo'
        },
        {
          text: 'Транспорт',
          search: 'transport'
        },
        {
          text: 'Гос. учреждения',
          search: 'gosudarstvo'
        }]}
      />
    </section>
  )
}

export default SecondPage;