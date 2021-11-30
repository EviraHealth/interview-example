import Radium from 'radium'
import React from 'react'
import color from '../color'

let Button = ({
  text,
  onClick,
  type = 'button',
  disabled,
  style,
  props,
  textColor = color.white,
  textHoverColor = color.white,
  big = false,
  backgroundColor = color.eviraBlue,
  hoverBackgroundColor = color.hoverBlue,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={() => { onClick && onClick() }}
      type={type}
      {...props}
      style={{
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 6,
        backgroundColor: disabled ? color.lightGrey : backgroundColor,
        color: disabled ? color.disabled : textColor,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: big ? 18 : 14,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 12,
        width: big && 200,
        height: big && 60,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 3,
        marginBottom: 3,
        fontFamily: '"Noah", sans-serif',
        fontWeight: 'bold',
        ':hover': {
          backgroundColor: hoverBackgroundColor,
          color: disabled ? color.disabled : textHoverColor,
          boxShadow: '0 0 2px inset, 0 0 2px',
        },
        ':focus': {
          boxShadow: '0 0 2px inset, 0 0 2px',
        },
        ...style,
      }}
    >
      {text}
    </button>
  )
}

Button = Radium(Button)

export { Button }
