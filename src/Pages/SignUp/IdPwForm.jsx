import React, { Component } from 'react'
import './IdPwForm.scss'

class IdPwForm extends Component {
  render() {
    return (
      <div className='IdPwForm'>
        <span className='label'>{this.props.label}</span>
        <input
          className='pwBox'
          id='pw'
          type='password'
          value={this.state.pw}
          onChange={this.handleValueChange}
          onKeyUp={this.handlePwValidation}
        />
        <span className='validationMassage'>
          {this.state.pwValidationMassage}
        </span>
      </div>
    )
  }
}

export default IdPwForm
