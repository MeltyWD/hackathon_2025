function PoemVariant(props) {

  return(
    <div className="variant">
      <div className="variant__textbox">
        {props.text.map((text, index) => 
          <p key={index} className="variant__text">{text}</p>
        )}
      </div>
      <p className="variant__text">{props.author}</p>
      <button className={`button variant__button page-link 
      ${ props.selected === true && 'button_disable'}`}></button>
      <button onClick={() => {props.onSelect(props.text, props.author)}} 
      className={`button variant__button variant__button_add 
      page-link ${ props.selected === true && 'button_disable'}`
      }></button>
      <button className={`button variant__button variant__button_view page-link`}></button>
    </div>
  )
}

export default PoemVariant