import imageArrow from '../../images/Arrow.png';

function FirstPage(props) {

  return (
    <section className={`page ${ props.selected === props.pageNumber && 'page_active'}`}>
      <section className="banner content">
        <div className="banner__text">
          <h2 className="banner__title">
            Вас приветсвует портал гражданских инициатив!
          </h2>
          <p className="banner__subtitle">
            Здесь Вы можете найти подходящее стихотворение для
            иносказательного представления своей гражданской инициативы.
            Просто нажимаете несколько кнопок – и получаете то, что нужно!
          </p>
        </div>
      </section>
      <section className="description content">
        <h1 className="description__title">Как это работает</h1>
        <div className="description__list">
          <div className="description__item">
            <h4 className="description__text">Отправка инициативы</h4>
          </div>
          <img
            src={imageArrow}
            alt="стрелка"
            className="description__arrow"
          />
          <div className="description__item">
            <h4 className="description__text">Рассмотрение инициативы</h4>
          </div>
          <img
            src={imageArrow}
            alt="стрелка"
            className="description__arrow"
          />
          <div className="description__item">
            <h4 className="description__text">Оценка реализации</h4>
          </div>
          <img
            src={imageArrow}
            alt="стрелка"
            className="description__arrow"
          />
          <div className="description__item">
            <h4 className="description__text">Утверждение в работу</h4>
          </div>
          <img
            src={imageArrow}
            alt="стрелка"
            className="description__arrow"
          />
          <div className="description__item">
            <h4 className="description__text">Реализация инициативы</h4>
          </div>
          <img
            src={imageArrow}
            alt="стрелка"
            className="description__arrow"
          />
          <div className="description__item">
            <h4 className="description__text">Отчет гос. органов</h4>
          </div>
        </div>
        <button onClick={() => props.onClickPageChange(2)} className="button button_description page-link">
          Все понятно, начинаем
        </button>
      </section>
    </section>
  )
}

export default FirstPage;