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
          search: 'сделать'
        },
        {
          text: 'Проверить',
          search: 'проверить'
        },
        {
          text: 'Почистить',
          search: 'почистить'
        },
        {
          text: 'Починить',
          search: 'починить'
        },
        {
          text: 'Убрать',
          search: 'убрать'
        },
        {
          text: 'Полюбоваться',
          search: 'полюбоваться'
        }]}
      />
    </section>
  )
}

export default ThirdPage;