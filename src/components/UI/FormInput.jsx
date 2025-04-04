import React from 'react'
import { Form,Button } from 'react-bootstrap';
import { PiEyeLight, PiEyeSlash } from "react-icons/pi";

const FormInput = ({label,controlId,type="text",placeholder,as="input",rows,groupClassName="mb-3",isPassword = false,showPassword = false,onToggle,...rest}) => {
    const inputType = isPassword ? 
    (showPassword ? 'text' : 'password') : 
    type;
  return (
    <>
    <Form.Group className={groupClassName} controlId={controlId}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={inputType}
        placeholder={placeholder}
        as={as}
        rows={as === "textarea" ? rows : undefined}
        {...rest}
      />
      {isPassword && (
          <Button
            type="button"
            variant="toggle"
            className="position-absolute end-0 top-50 translate-middle-y me-2"
            onClick={onToggle}
          >
            {showPassword ? <PiEyeLight /> : <PiEyeSlash />}
          </Button>
        )}
    </Form.Group>
    </>
  )
}

export default FormInput