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
    <section className={`page ${ props.selected === props.pageNumber && 'page_active'}`}>
      <TopPageSection 
        decisionText={`> ${props.prevSelected}`}
        questionText={'В чем суть проблемы?'}
      />
      <PageQuestion 
        onClickBack={handleClickBack}
        onClickSelect={handleClickNext}
        categoryList={[{
          text: 'Освещение',
          search: 'свет'
        },
        {
          text: 'Состояние',
          search: 'состояни'
        },
        {
          text: 'Безопасность',
          search: 'опасность'
        },
        {
          text: 'Знаки и разметка',
          search: 'знак'
        },
        {
          text: 'Остановки',
          search: 'стоянк'
        },
        {
          text: 'Реклама',
          search: 'реклама'
        }]}
      />
    </section>
  )
}

export default ThirdPage;