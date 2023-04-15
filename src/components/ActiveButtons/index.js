import './index.css'

const ActiveButtons = props => {
  const renderListItems = () => {
    const {slides, activeSlide, setActiveSlide} = props

    return slides.map(each => {
      const isActive = activeSlide === each.id
      const cardBG = isActive
        ? 'active-button-card-bg active'
        : 'active-button-card-bg'
      return (
        <li
          className={cardBG}
          key={each.id}
          onClick={() => {
            setActiveSlide(each.id)
          }}
        >
          <div className="active-button-card">
            <h1 className="active-key-heading">{each.heading}</h1>
            <p className="active-key-para">{each.description}</p>
          </div>
        </li>
      )
    })
  }

  return <ol className="active-buttons-con">{renderListItems()}</ol>
}

export default ActiveButtons
