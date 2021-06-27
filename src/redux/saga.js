import { all, spawn, call } from 'redux-saga/effects';
import { saga as homePage } from '../ducks/HomePage';

const saga = function* () {
    const sagas = [homePage];
    yield all(
        sagas.map((saga) => spawn(function* () {
            while (true) {
                try {
                    yield call(saga)
                    break;
                } catch (e) {
                    console.log(e)
                }
            }
        }))
    )
}

export default saga