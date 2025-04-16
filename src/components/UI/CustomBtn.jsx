import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

const CustomBtn = (
    {
        type = 'button',
        variant = '',
        onClick,
        disabled = false,
        label,
        icon = null,
        buttonClass = '',
        isLoading = false,
        size = ''
      }
) => {
  return (
    <Button 
    type={type}
    variant={variant}
    onClick={onClick}
    disabled={disabled || isLoading}
    className={`${buttonClass}`}
    size={size}>
      {isLoading ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        </>
      ) : (
        <>
          {icon && React.isValidElement(icon) ? icon : icon && <icon />}
          {label && (icon ? <span>{label}</span> : label)}
        </>
      )}
    </Button>
  )
}

CustomBtn.PropTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default CustomBtn