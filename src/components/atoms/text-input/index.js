import React from 'react'
import PropTypes from 'prop-types'

import { StyledInput } from '../_styled-input'

const TextInput = ({ defaultValue, ...props }) => {
  if (props.masked) {
    const length = defaultValue ? defaultValue.length : 8
    const maskedValue = new Array(length).join('•')
    return <TextInput.Element {...props} placeholder={maskedValue} readOnly />
  }
  return <TextInput.Element defaultValue={defaultValue} {...props} />
}

TextInput.Element = StyledInput.extend`
  height: 44px;
`

TextInput.propTypes = {
  /** Hide input, similar to passwords but for other private information. Implies readOnly. */
  masked: PropTypes.bool,
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass error string directly to show error state */
  error: PropTypes.string,
  /** onChange transparently passed to the input */
  onChange: PropTypes.func,
  /** Text to display when the input is empty */
  placeholder: PropTypes.string,
  /** The default value for the field */
  defaultValue: PropTypes.string
}

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null
}

export default TextInput
export { StyledInput }
