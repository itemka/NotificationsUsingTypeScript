import {AnyAction} from "redux";
import {IAppStore} from "./state";
import {ThunkAction, ThunkDispatch} from "redux-thunk";

const ADD_OBJECT_OF_NOTIFICATION = `ADD_OBJECT_OF_NOTIFICATION`;
const FILTER_ARRAY = `FILTER_ARRAY`;

interface INewObjNotification {
    type: typeof ADD_OBJECT_OF_NOTIFICATION,
    id: number,
    title: string,
    text: string,
    types: "Success" | "Warning" | "Error",
}

const addObjectOfNotification = (id: number, title: string, text: string, types: string) => ({
    type: ADD_OBJECT_OF_NOTIFICATION,
    id, title, text, types,
});

interface IFilterArray {
    type: typeof FILTER_ARRAY,
    id: number
}

const filterArray = (id: number) => ({type: FILTER_ARRAY, id});


const elementArrayDeleteThunk = (id: number): ThunkAction<void, {}, {}, AnyAction> => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    setTimeout(() => {
        dispatch(filterArray(id));
    }, 2000)
};


function randomInteger(min: number, max: number) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}


export const AddNotificationThunk = (title: string, text: string, type: string): ThunkAction<void, IAppStore, {}, AnyAction> =>
    (dispatch: ThunkDispatch<{}, {}, AnyAction>, getState: () => IAppStore) => {
        //let arrayLength = getState().partStore.notificationArray.length + 1;
        let arrayLength = randomInteger(Math.random() * 10, 99999999999999);
        dispatch(addObjectOfNotification(arrayLength, title, text, type));
        dispatch(elementArrayDeleteThunk(arrayLength));
    };


export interface IObjectNotification {
    id: number,
    title: string,
    text: string,
    types: "Success" | "Warning" | "Error",
}

export interface IMyState {
    notificationArray: Array<IObjectNotification>
}

let initialState: IMyState = {
    notificationArray: [],
};


const Reducer = (state: IMyState = initialState, action: INewObjNotification | IFilterArray): IMyState => {
    switch (action.type) {
        case ADD_OBJECT_OF_NOTIFICATION:
            return {
                ...state,
                notificationArray: [
                    ...state.notificationArray,
                    {
                        id: action.id,
                        title: action.title,
                        text: action.text,
                        types: action.types
                    }
                ]
            };
        case FILTER_ARRAY:
            return {
                ...state,
                notificationArray: [...state.notificationArray.filter(item => item.id !== action.id)]
            };
        default: {
            return state;
        }
    }
};

export default Reducer;
