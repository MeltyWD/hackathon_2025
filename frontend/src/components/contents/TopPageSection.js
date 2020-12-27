function TopPageSection(props) {
  return (
    <section className="selection content">
      <div className="selection__container">
        <div className="selection__text">
          <p className="selections__decision">{props.decisionText}</p>
          <p className="selections__question">{props.questionText}</p>
        </div>
      </div>
    </section>
  )
}

export default TopPageSection;