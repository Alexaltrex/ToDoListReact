import React from 'react';
import style from './ListItem.module.css';



const ListItem = (props) => {
    // коллбэк, передаваемый в обработчик onClick 'кнопки' close
    let onDeleteListItem = (event) => {
        let id = event.target.parentNode.id;
        props.deleteListItem(id);
    };

    // коллбэк, передаваемый в обработчик onClick для listItem
    let onListItemClick = (event) => {
        let id = event.target.parentNode.id;
        props.onListItemClick(id);
    };

    //let itemClass = `${style.listItem}`;
    let itemClass = (props.active === true) ? style.listItem : `${style.listItem} ${style.deactivated}`;

    return (
        <div className={itemClass} id={props.id} >
            <div className={style.title} onClick={onListItemClick}>{props.text}</div>
            <div
                className={style.close}
                onClick={onDeleteListItem}
            />
        </div>
    )
};

export default ListItem;