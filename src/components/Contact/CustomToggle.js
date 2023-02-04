import React from 'react'

class CustomToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    this.props.onClick(e);
  }

  render() {
    return (
      <b onClick={this.handleClick} className='aForContact'>
        {this.props.children}
      </b>
    );
  }
}
export default CustomToggle
