import TopPageSection from '../contents/TopPageSection';
import PageQuestion from '../contents/PageQuestion'

function ThirdPage(props) {

  function handleClickBack() {
    props.selectedCategory('')
    props.onClickPageChange(3)
  }

  function handleClickNext(text) {
    props.selectedCategory(text)
    props.onClickPageChange(5)
  }

  return (
    <section className={`page ${ props.selected === props.pageNumber && 'page_active'}`}>
      <TopPageSection 
        decisionText={`> ${props.prevSelected.one} > ${props.prevSelected.two}`}
        questionText={'Что Вы предлагаете?'}
      />
      <PageQuestion 
        onClickBack={handleClickBack}
        onClickSelect={handleClickNext}
        categoryList={[{
          text: 'Сделать',
          search: 'Сделать'
        },
        {
          text: 'Проверить',
          search: 'Проверить'
        },
        {
          text: 'Почистить',
          search: 'Почистить'
        },
        {
          text: 'Починить',
          search: 'Починить'
        },
        {
          text: 'Убрать',
          search: 'Убрать'
        },
        {
          text: 'Полюбоваться',
          search: 'Полюбоваться'
        }]}
      />
    </section>
  )
}

export default ThirdPage;