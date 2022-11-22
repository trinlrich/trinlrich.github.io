import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class ColorButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button>Color</button>
    );
  }
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="button_div">
      </div>
    )
  }
}
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Grid />);