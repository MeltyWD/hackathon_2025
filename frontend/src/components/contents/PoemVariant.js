function PoemVariant(props) {

  return(
    <div className="variant">
      <div className="variant__textbox">
        {props.text.map((text, index) => 
          <p key={index} className="variant__text">{text}</p>
        )}
        <p className="variant__text">{props.author}</p>
      </div>
      <button className="button variant__button page-link"></button>
      <button className="button button_variant page-link">Годно, беру</button>
    </div>
  )
}

export default PoemVariant