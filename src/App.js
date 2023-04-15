import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

import Header from './components/Header'
import ActiveButtons from './components/ActiveButtons'
import CurrentSlide from './components/CurrentSlide'

// This is the list used in the application. You can move them to any component needed.
const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

// Replace your code here
class App extends Component {
  state = {
    slides: [...initialSlidesList],
    activeSlide: initialSlidesList[0].id,
    activeSlideHeading: initialSlidesList[0].heading,
    activeSlideDescription: initialSlidesList[0].description,
  }

  getItemFromSlides = item => {
    const {activeSlide} = this.state
    return item.id === activeSlide
  }

  updateActiveSlideHeading = (heading, activeSlide) => {
    this.setState(previous => {
      const {slides} = previous
      const item = slides.find(each => each.id === activeSlide)
      const index = slides.indexOf(item)
      const newItem = {...item, heading}
      slides.splice(index, 1, newItem)

      return {activeSlideHeading: heading, slides: [...slides]}
    })
  }

  updateActiveSlideDescription = (description, activeSlide) => {
    this.setState(previous => {
      const {slides} = previous
      const item = slides.find(each => each.id === activeSlide)
      const index = slides.indexOf(item)
      const newItem = {...item, description}
      slides.splice(index, 1, newItem)

      return {activeSlideDescription: description, slides: [...slides]}
    })
  }

  addNewSlide = () => {
    const object = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }

    this.setState(previous => {
      const {slides} = previous
      const item = slides.find(this.getItemFromSlides)

      const index = slides.indexOf(item)
      slides.splice(index + 1, 0, object)
      return {
        slides: [...slides],
        activeSlide: object.id,
        activeSlideHeading: object.heading,
        activeSlideDescription: object.description,
      }
    })
  }

  setActiveSlide = activeSlide => {
    const {slides} = this.state
    const item = slides.find(each => each.id === activeSlide)
    this.setState({
      activeSlide,
      activeSlideDescription: item.description,
      activeSlideHeading: item.heading,
    })
  }

  render() {
    const {
      slides,
      activeSlide,
      activeSlideDescription,
      activeSlideHeading,
    } = this.state
    return (
      <>
        <Header />
        <button onClick={this.addNewSlide} type="button" className="new-button">
          <img
            className="new-button-image"
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
            alt="new plus icon"
          />
          <span className="new-button-text">New</span>
        </button>
        <div className="active-and-current-slides">
          <ActiveButtons
            slides={slides}
            activeSlide={activeSlide}
            setActiveSlide={this.setActiveSlide}
          />
          <CurrentSlide
            activeSlide={activeSlide}
            activeSlideHeading={activeSlideHeading}
            activeSlideDescription={activeSlideDescription}
            updateActiveSlideHeading={this.updateActiveSlideHeading}
            updateActiveSlideDescription={this.updateActiveSlideDescription}
          />
        </div>
      </>
    )
  }
}
export default App
