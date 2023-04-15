import {Component} from 'react'
import './index.css'

class CurrentSlide extends Component {
  state = {isHeadingActive: false, isDescriptionActive: false}

  changeHeading = e => {
    const {activeSlide, updateActiveSlideHeading} = this.props
    updateActiveSlideHeading(e.target.value, activeSlide)
  }

  changeDescription = e => {
    const {activeSlide, updateActiveSlideDescription} = this.props
    updateActiveSlideDescription(e.target.value, activeSlide)
  }

  onBlurHeading = () => {
    this.setState({isHeadingActive: false})
  }

  onBlurDescription = () => {
    this.setState({isDescriptionActive: false})
  }

  render() {
    const {activeSlideHeading, activeSlideDescription} = this.props
    const {isDescriptionActive, isHeadingActive} = this.state
    return (
      <div className="current-slide-con">
        {isHeadingActive ? (
          <input
            onBlur={this.onBlurHeading}
            onChange={this.changeHeading}
            value={activeSlideHeading}
            type="text"
            className="input-element-heading"
          />
        ) : (
          <h1
            className="input-element-heading"
            onClick={() => {
              this.setState({isHeadingActive: true})
            }}
          >
            {activeSlideHeading}
          </h1>
        )}
        {isDescriptionActive ? (
          <input
            onBlur={this.onBlurDescription}
            onChange={this.changeDescription}
            value={activeSlideDescription}
            type="text"
            className="input-element-description"
          />
        ) : (
          <p
            className="input-element-description"
            onClick={() => {
              this.setState({isDescriptionActive: true})
            }}
          >
            {activeSlideDescription}
          </p>
        )}
      </div>
    )
  }
}

export default CurrentSlide
