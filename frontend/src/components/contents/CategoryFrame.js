function CategoryFrame(props) {
  return (
    <div 
      onClick={() => props.onClickSelect(props.text, props.categoryNumber)} 
      className={`options__item ${props.selected === props.categoryNumber? 'options__item_active' : ''}`}>
        <h4 className="options__text">{props.text}</h4>
    </div>
  )
}

export default CategoryFrame