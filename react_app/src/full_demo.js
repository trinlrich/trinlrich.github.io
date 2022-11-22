import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  render() {
    return (
      <button 
        style = {{color: this.state.color}}
        onClick = {() => this.props.onClick(this.state.color)}
      >
        {this.state.color}
      </button>
    );
  }
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        background: "white"
    }
  }

  handleClick(color) {
    this.setState({background: color})
  }

  renderButton(color) {
    return (
      <ColorButton
        value = {color}
        onClick = {() => this.handleClick(color)}
      />
    )
  }

  render () {
    return (
      <div className="button_div" style={{background: this.state.background}}>
        {this.renderButton("Red")}
        {this.renderButton("Green")}
        {this.renderButton("Blue")}
      </div>
    )
  }
}
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Grid />);