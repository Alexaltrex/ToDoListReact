import {addListItemAC, updateNewListItemTextAC} from "../../redux/list-reduser";
import Inputbox from "./Inputbox";
import {connect} from "react-redux";

// контейнерная компонента  - обертака для презентационной
// "чистой" компоненты Inputbox.jsx
// принимает данные из state и описывает функционал формирования и оправки (dispatch) action
// функционал формирования action она импортирует из list-reducer.js
// данные и функционал передаются через props как анонимная информация
// (под другим именем, не привязанным к store)

const mapStateToProps = (state) => {
    return ({
        newListItemText: state.listPage.newListItemText
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        updateNewListItemText: (text) => {
            dispatch(updateNewListItemTextAC(text));
        },
        addListItem: () => {
            dispatch(addListItemAC());
        }
    })
};

// создание контейнерной компоненты InputboxContainer для компоненты Inputbox с помощью react-redux
const InputboxContainer = connect(mapStateToProps, mapDispatchToProps)(Inputbox);

export default InputboxContainer;

