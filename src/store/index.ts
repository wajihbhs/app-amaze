import {createStore} from 'vuex'
import {ShowInterface} from "@/models/ShowInterface";

interface ShowState {
    search: string,
    list: ShowInterface[],
    checkedList: ShowInterface[],
    myList: ShowInterface[],
}

export default createStore({
    state: {
        search: '',
        list: [],
        checkedList: [],
        myList: [],
    },
    getters: {
        getList: (state: ShowState) => state.list,
        getSearch: (state: ShowState) => state.search,
        getMyList: (state: ShowState) => state.myList,
        getCheckedList: (state: ShowState) => state.checkedList,
    },
    mutations: {
        addToMyList(state: ShowState, payload: ShowInterface): void {
            const findShowFromMyList = state.myList.find((show: ShowInterface) => show.id === payload.id);

            if ('undefined' === typeof findShowFromMyList) {
                state.myList.push(payload);
            }
        },
        onCheck(state: ShowState, payload: ShowInterface): void {
            state.checkedList.push(payload);
        },
        onUnCheck(state: ShowState, payload: ShowInterface): void {
            const item = state.checkedList.find((el: ShowInterface) => el.id === payload.id);

            if ('undefined' !== typeof item) {
                state.checkedList.splice(state.checkedList.indexOf(item), 1);
            }
        },
        setSearch(state: ShowState, payload: string): void {
            state.search = payload;
        },
        saveList(state: ShowState, payload: ShowInterface[]) {
            state.list = payload;
        }
    },
})
