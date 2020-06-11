// редьюсер для list
// часть логики dispatch, отвечающая за List

// констатны ключей для action
const ADD_LIST_ITEM = 'ADD-LIST-ITEM';
const UPDATE_NEW_LIST_ITEM_TEXT = 'UPDATE-NEW-LIST-ITEM-TEXT';
const DELETE_ITEM = 'DELETE-ITEM';
const ON_LIST_ITEM_CLICK = 'ON-LIST-ITEM-CLICK';

let initialState = {
    list: [],
    newListItemText: ''
};

// принимает старый state и action, возвращает обновленный state
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        // добавить новый list item
        case ADD_LIST_ITEM: {
            if (state.newListItemText) {
                // let newID;
                // if (state.list.length === 0) {
                //     newID = '0';
                // } else {
                //     newID = `${+state.list[state.list.length-1].id + 1}`
                // }

                return {
                    ...state,
                    list: [...state.list,
                        {
                            // если list пустой, то id = 0, иначе id последнего + 1
                            id: (state.list.length === 0) ? '0' : `${+state.list[state.list.length - 1].id + 1}`,

                            text: state.newListItemText,
                            active: true
                        }
                    ],
                    newListItemText: ''
                };

            }

        }

        // ввод текста нового list item вы переменную state - newListItemText
        case UPDATE_NEW_LIST_ITEM_TEXT: {
            return ({
                ...state,
                newListItemText: action.newText
            })
        }

        case DELETE_ITEM: {
            let index = state.list.findIndex(elem => elem.id === action.id);
            let arr1 = state.list.slice(0, index);
            let arr2 = state.list.slice(index + 1, state.list.length);
            return ({
                ...state,
                list: arr1.concat(arr2)
            })
        }

        // кликнули на ListItem
        case ON_LIST_ITEM_CLICK: {
            let index = state.list.findIndex(elem => elem.id === action.id);
            let arr1 = state.list.slice(0, index);
            let arr2 = state.list.slice(index + 1, state.list.length);
            return {
                ...state,
                list: [
                    ...arr1,
                    {
                        id: state.list[index].id,
                        text: state.list[index].text,
                        active: !state.list[index].active
                    },
                    ...arr2
                ]
            }
        }

        default:
            return state;
    }
};

//action creator - функция принимает некоторую информацию из UI
// и создает action - объект, содержащий тип события в UI и (опционально)
// некоторую информацию об этом событии (например введенный текст)

// создает action c типом события в UI - нажали на кнопку "добавить запись"
export const addListItemAC = () =>
    ({
        type: ADD_LIST_ITEM
    });

// принимает аргумент text (введенный в input текст)
// создает action c типом события в UI (поле type) - добавили текст в input
// и информацией (поле newText) - введенный текст
export const updateNewListItemTextAC = (text) => ({
    type: UPDATE_NEW_LIST_ITEM_TEXT,
    newText: text
});

// создает action c типом события в UI - нажали на кнопку 'закрыть'
export const deleteItemAC = id => ({
    type: DELETE_ITEM,
    id: id
});

// создает action c типом события в UI - кликнули на ListItem
export const onListItemClickAC = id => ({
    type: ON_LIST_ITEM_CLICK,
    id: id
})

export default listReducer;