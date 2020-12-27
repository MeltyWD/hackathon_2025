import TopPageSection from '../contents/TopPageSection';
import PageQuestion from '../contents/PageQuestion'

function ThirdPage(props) {

  function handleClickBack() {
    props.selectedCategory('')
    props.onClickPageChange(2)
  }

  function handleClickNext(text) {
    props.selectedCategory(text)
    props.onClickPageChange(4)
  }

  return (
    <section className={`selected ${ props.selected === props.pageNumber && 'selected_active'}`}>
      <TopPageSection 
        decisionText={`> ${props.prevSelected}`}
        questionText={'В чем суть проблемы?'}
      />
      <PageQuestion 
        onClickBack={handleClickBack}
        onClickSelect={handleClickNext}
        categoryList={[{
          text: 'Освещение',
          search: 'Свет'
        },
        {
          text: 'Состояние',
          search: 'Состояни'
        },
        {
          text: 'Безопасность',
          search: 'Опасность'
        },
        {
          text: 'Знаки и разметка',
          search: 'Знак'
        },
        {
          text: 'Остановки',
          search: 'Стоянк'
        },
        {
          text: 'Реклама',
          search: 'Реклама'
        }]}
      />
    </section>
  )
}

export default ThirdPage;