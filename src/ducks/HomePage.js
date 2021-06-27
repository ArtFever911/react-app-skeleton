import { all, takeEvery, call, put } from "redux-saga/effects";
import { Record } from 'immutable';
import { createSelector } from 'reselect';
import HomePageService from '../services/HomePage';

import { appName } from '../config';
/**
 * Constants
 */

export const moduleName = 'homePage';
export const prefix = `${appName}/${moduleName}`;
export const GET_HOME_PAGE_DATA_RESUEST = `${prefix}/GET_HOME_PAGE_DATA_RESUEST`;
export const GET_HOME_PAGE_DATA_SUCCES = `${prefix}/GET_HOME_PAGE_DATA_SUCCES`;
export const GET_HOME_PAGE_DATA_FAILURE = `${prefix}/GET_HOME_PAGE_DATA_FAILURE`;

/**
 * Reducer
 */
export const ReducerRecord = Record({
    data: {},
    loading: false,
    err: false
})

export default function reducer(
    state = ReducerRecord(),
    { type, payload, err } = {}
) {
    switch (type) {
        case GET_HOME_PAGE_DATA_RESUEST:
            return state.set('loading', true)

        case GET_HOME_PAGE_DATA_SUCCES:
            return state.set('loading', false).set('data', payload)

        case GET_HOME_PAGE_DATA_FAILURE:
            return state.set('loading', false).set('err', err)

        default:
            return state
    }
}

/**
 * Actoions
 */

export const getHomePageData = () => ({
    type: GET_HOME_PAGE_DATA_RESUEST
})

/**
 * Selectors
 */

export const stateSelector = (state) => state[moduleName]
export const loadingSelector = createSelector(
    stateSelector,
    state => state.loading
)
export const errorSelector = createSelector(
    stateSelector,
    state => state.err
)
export const dataSelector = createSelector(
    stateSelector,
    state => state.data
)

/**
 * Sagas
 */

export const getPageDataSaga = function* () {
    try {
        const { data } = yield call(HomePageService.getData);
        yield put({ type: GET_HOME_PAGE_DATA_SUCCES, payload: data })
    } catch (error) {
        yield put({ type: GET_HOME_PAGE_DATA_FAILURE, err: error })
    }
}
export const saga = function* () {
    const sagas = [
        takeEvery(GET_HOME_PAGE_DATA_RESUEST, getPageDataSaga)
    ];

    yield all(sagas)

}