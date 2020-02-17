import React, {Component} from 'react'


  class ScrollingWrapper extends Component {
  state = { hasScrolled: false }

  componentDidMount() {
    this.scrollingWrapper.addEventListener('scroll', this.onScroll)
  }

  onScroll = () => {
    if (this.scrollingWrapper.scrollTop > 100 && !this.state.hasScrolled) {
      this.setState({ hasScrolled: true })
    } else if (this.scrollingWrapper.scrollTop < 100 && this.state.hasScrolled) {
      this.setState({ hasScrolled: false })
    }
  }

  scrollToTop = () => {
    this.scrollingWrapper.scrollTop = 0
  }

  reference = id => ref => {
    this[id] = ref
  }

  render() {
    return(
      <div>
        {this.state.hasScrolled && (
          <button type='button' onClick={this.scrollToTop} />
        )}
        <button type='button' ref={this.reference('scrollingWrapper')} />
      </div>
    )
  }
}

export default ScrollingWrapper
