import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

class App extends React.Component {
  render() {
    return (
      <Parallax ref={ref => (this.parallax = ref)} pages={2}>
        <ParallaxLayer factor={0.5} offset={0} speed={1}>
          <div style={{ height: '100%', backgroundColor: 'red' }} />
        </ParallaxLayer>

        <ParallaxLayer factor={0.5} offset={0.5} speed={1}>
          <div style={{ height: '100%', backgroundColor: 'green' }} />
        </ParallaxLayer>

        <ParallaxLayer factor={1} offset={0.99} speed={1}>
          <div style={{ height: '100%', backgroundColor: 'yellow' }} />
        </ParallaxLayer>
      </Parallax>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
