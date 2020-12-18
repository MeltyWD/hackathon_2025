import imageArrow from '../images/Arrow.png';

function SecondPage(props) {

  return (
    <section className={`page ${ props.selected === props.pageNumber && 'page_active'}`}>
      <section className="selection content">
        <div className="selection__container">
          <div className="selection__text">
            <p className="selections__decision">Текст</p>
            <p className="selections__question">Текст</p>
          </div>
          <div className="description description_size_small">
            <h1 className="description__title description__title_size_small">
              Как это работает
            </h1>
            <div className="description__list">
              <div className="description__item description__item_size_small">
                <h4 className="description__text description__text_size_small">
                  Отправка инициативы
                </h4>
              </div>
              <img
                src={imageArrow}
                alt="стрелка"
                className="description__arrow description__arrow_size_small"
              />
              <div className="description__item description__item_size_small">
                <h4 className="description__text description__text_size_small">
                  Рассмотрение инициативы
                </h4>
              </div>
              <img
                src={imageArrow}
                alt="стрелка"
                className="description__arrow description__arrow_size_small"
              />
              <div className="description__item description__item_size_small">
                <h4 className="description__text description__text_size_small">
                  Оценка реализации
                </h4>
              </div>
              <img
                src={imageArrow}
                alt="стрелка"
                className="description__arrow description__arrow_size_small"
              />
              <div className="description__item description__item_size_small">
                <h4 className="description__text description__text_size_small">
                  Утверждение в работу
                </h4>
              </div>
              <img
                src={imageArrow}
                alt="стрелка"
                className="description__arrow description__arrow_size_small"
              />
              <div className="description__item description__item_size_small">
                <h4 className="description__text description__text_size_small">
                  Реализация инициативы
                </h4>
              </div>
              <img
                src={imageArrow}
                alt="стрелка"
                className="description__arrow description__arrow_size_small"
              />
              <div className="description__item description__item_size_small">
                <h4 className="description__text description__text_size_small">
                  Отчет гос. органов
                </h4>
              </div>
            </div>
            <p className="description__info">Статус инициативы Вы можете отследить в своем Кабинете, который доступен после регистрации на Портале.</p>
          </div>
        </div>
      </section>
      <section className="options content">
        <div className="options__grid">
          <article className="options__item"><h4 className="options__text">Текст</h4></article>
          <article className="options__item options__item_active"><h4 className="options__text">Текст</h4></article>
          <article className="options__item"><h4 className="options__text">Текст</h4></article>
          <article className="options__item"><h4 className="options__text">Текст</h4></article>
          <article className="options__item"><h4 className="options__text">Текст</h4></article>
          <article className="options__item"><h4 className="options__text">Текст</h4></article>
        </div>
        <button onClick={() => props.onClickPageChange(1)} className="button button_options page-link">Назад</button>
      </section>
    </section>
  )
}

export default SecondPage;