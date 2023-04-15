import './index.css'

const ActiveButtons = props => {
  const renderListItems = () => {
    const {slides, activeSlide, setActiveSlide} = props
    let count = 0

    return slides.map(each => {
      count += 1
      const isActive = activeSlide === each.id
      const cardBG = isActive ? 'active-list active' : 'active-list'
      const {heading, description} = each
      return (
        <li
          testId={`slideTab${count}`}
          key={each.id}
          onClick={() => {
            setActiveSlide(each.id)
          }}
          className={cardBG}
        >
          <p className="active-count">{count}</p>

          <div className="active-button-card">
            <h1 className="active-key-heading">{heading}</h1>
            <p className="active-key-para">{description}</p>
          </div>
        </li>
      )
    })
  }

  return <ol className="active-buttons-con">{renderListItems()}</ol>
}

export default ActiveButtons
