import {useEffect, useState} from "react";

const Dropdown = ({data, defaultValue, handleClick, disabled}) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(data);
    const [selectedItem, setSelectedItem] = useState(defaultValue);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
        setOpen(false)
        handleClick(parseInt(id))
    }

    useEffect(()=>{
        disabled && setOpen(false)
    },[disabled])

    return (
        <div className={'dropdown '+(disabled ? "disabled " : "") + (isOpen && "open")}>
            <div className='dropdown-header' onClick={!disabled ? toggleDropdown : undefined}>
                {selectedItem ? items.find(item => item.id == selectedItem).id : "Select your destination"}
                <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}>&#8595;</i>
            </div>
            <div className={`dropdown-body ${isOpen && 'open'}`}>
                {items.map(item => (
                    <div key={item.id} className={"dropdown-item "+(item.id == selectedItem && 'selected')} onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        {item.id}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dropdown