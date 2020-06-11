import React from 'react';
import style from './List.module.css';
import ListItem from "./ListItem/ListItem";

const List = (props) => {
    let listElem = props.list.map(listItem =>
        <ListItem
            text={listItem.text}
            key={listItem.id}
            id={listItem.id}
            active = {listItem.active}
            deleteListItem = {props.deleteItem}
            onListItemClick = {props.onListItemClick}
        />
    );
    return (
        <div className={style.list}>
            {listElem}
        </div>
    )
}

export default List;
