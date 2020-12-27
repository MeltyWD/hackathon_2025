import imageArrow from '../../images/Triangle-arrow.svg';
import bannerImage from '../../images/building.svg'

function FirstPage(props) {

  return (
    <section className={`selected ${ props.selected === props.pageNumber && 'selected_active'}`}>
      <div className="banner content">
        <div className="banner__text">
          <h2 className="banner__title">
            Здравствуй,<br /> неравнодушный гражданин.
          </h2>
          <p className="banner__subtitle">
            У тебя есть идеи по улучшению жизни сограждан, у нас есть способы донести твои идеи до чиновников.<br />
            Для этого тебе нужно подобрать подходящую тему, выбрать понравившуюся цитату, и отправить письмо.<br />
            Давай же сделаем жизнь удобнее! <br />
          </p>
        </div>
        <img className="banner__img" src={bannerImage} alt="" />
      </div>

      <section className="description content">
        <h1 className="description__title">Как же с этим разобраться?</h1>
        <div className="description__list">
          <div className="description__item">
            <h4 className="description__text">Отправить письмо</h4>
          </div>
          <img src={imageArrow} alt="стрелка" className="description__arrow" />
          <div className="description__item">
            <h4 className="description__text">Узнать о рассмотрении</h4>
          </div>
          <img src={imageArrow} alt="стрелка" className="description__arrow" />
          <div className="description__item">
            <h4 className="description__text">Проследить за исполнением</h4>
          </div>
          <img src={imageArrow} alt="стрелка" className="description__arrow" />
          <div className="description__item">
            <h4 className="description__text">Получить<br />отчет</h4>
          </div>
        </div>
        <button onClick={() => props.onClickPageChange(2)} className="button button_description page-link">
          Все понятно, приступим!
        </button>
      </section>
    </section>
  )
}

export default FirstPage;