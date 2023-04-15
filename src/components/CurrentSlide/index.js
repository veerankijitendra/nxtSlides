import './index.css'

const CurrentSlide = props => {
  const {
    activeSlide,
    activeSlideHeading,
    activeSlideDescription,
    updateActiveSlideHeading,
    updateActiveSlideDescription,
  } = props
  const changeHeading = e => {
    updateActiveSlideHeading(e.target.value, activeSlide)
  }
  const changeDescription = e => {
    updateActiveSlideDescription(e.target.value, activeSlide)
  }
  return (
    <div className="current-slide-con">
      <input
        onChange={changeHeading}
        value={activeSlideHeading}
        type="text"
        className="input-element-heading"
      />
      <input
        onChange={changeDescription}
        value={activeSlideDescription}
        type="text"
        className="input-element-description"
      />
    </div>
  )
}

export default CurrentSlide
