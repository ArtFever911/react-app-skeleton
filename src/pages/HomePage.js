import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { dataSelector, errorSelector, getHomePageData, loadingSelector } from '../ducks/HomePage';

const HomePage = () => {
    const dispatch = useDispatch();
    const error = useSelector(errorSelector);
    const data = useSelector(dataSelector);
    const loading = useSelector(loadingSelector);

    useEffect(() => {
        dispatch(getHomePageData())
    }, [dispatch])

    const { icon_url, value } = data;
    return (
        <div style={{ heiaght: '50%', width: "50%", marginLeft: "25%", marginTop: '25%', fontSize: '40px' }}>
            <img src={icon_url} alt="joke" />
            <p>
                {value}
            </p>
        </div>
    )
}

export default HomePage;