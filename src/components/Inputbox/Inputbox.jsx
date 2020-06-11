import React from 'react';
import style from './Inputbox.module.css'

const Inputbox = (props) => {

    // коллбэк, передаваемый в обработчик onChange
    let onListItemChange = (event) => {
        props.updateNewListItemText(event.target.value);
    };

    // коллбэк, передаваемый в обработчик onClick
    let onAddListItem = () => {
        props.addListItem();
    };

    return (
        <div className={style.inputbox}>
            <div className={style.input}>
                <input
                    type="text"
                    placeholder="Your task"
                    onChange={onListItemChange}
                    value={props.newListItemText}
                />
            </div>
            <div className={style.btn}
                 onClick={onAddListItem}
            />
        </div>
)
};

export default Inputbox;