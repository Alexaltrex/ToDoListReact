import List from "./List";
import {connect} from "react-redux";
import {deleteItemAC, onListItemClickAC} from "../../redux/list-reduser";


let mapStateToProps = (state) => {
    return ({
        list: state.listPage.list,
    })
};

let mapDispatchToProps = (dispatch) => {
    return ({
        deleteItem: (id) => {
            dispatch(deleteItemAC(id));
        },
        onListItemClick: id => {
            dispatch(onListItemClickAC(id))
        }
    })
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);


export default ListContainer;
