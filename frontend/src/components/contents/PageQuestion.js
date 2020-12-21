import React from 'react';
import CategoryFrame from './CategoryFrame';

function PageQuestion(props) {

  const [ selectCategory, setSelectCategory] = React.useState(0);

  function handleClickCategory(text, number) {
    setSelectCategory(number)
    props.onClickSelect(text)
  }

  return (
    <section className="options content">
      <div className="options__grid">
        {props.categoryList.map((category, index) => 
          <CategoryFrame 
            key={index}
            categoryNumber={index + 1}
            selected={selectCategory}
            text={category.text}
            search={category.search}
            onClickSelect={handleClickCategory}
          />
        )}
      </div>
      <button onClick={props.onClickBack} className="button button_options page-link">Назад</button>
    </section>
  )
}

export default PageQuestion;