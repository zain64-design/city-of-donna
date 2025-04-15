import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { IoChevronDownSharp } from "react-icons/io5";

const CtSelect = ({
    options,
    selectedValue,
    onValueChange,
    ctClass = '',
    placeholder = "Select...",
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const getSelectedLabel = () =>
        options.find(opt => opt.value === selectedValue)?.label || placeholder;

    return (
        <Dropdown
            show={isOpen}
            onToggle={(isOpen) => setIsOpen(isOpen)}
            className={ctClass}
        >
            <Dropdown.Toggle
                variant="outline-primary"
                className="ct-btn d-flex justify-content-between align-items-center w-100"
            >
                <span>{getSelectedLabel()}</span>

                <div className="icon">
                <IoChevronDownSharp />
                </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
                {options?.map((option) => (
                    <Dropdown.Item
                        key={option.value}
                        onClick={() => {
                            onValueChange(option.value);
                            setIsOpen(false);
                        }}
                        active={selectedValue === option.value}
                    >
                        {option.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CtSelect;