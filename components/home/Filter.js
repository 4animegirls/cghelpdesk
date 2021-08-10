import React, { useState, useEffect } from 'react'
import {Picker} from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux'
import { itemsAction, itemsStatesAction, reduceItemsStatesAction } from '../../actions';
import { v4 as uuidv4 } from 'uuid';


export default () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const itemsStates = useSelector( state => state.itemsStates);
    const [allStates, changeAllStates] = useState(false);




    return (
        <Picker
            selectedValue={selectedFilter}
            onValueChange={(itemValue, itemIndex) => {
                if (itemValue !== 'More' && itemValue !== 'Less' ){
                    setSelectedFilter(itemValue)
                    dispatch(itemsAction(user.Token, 1, itemValue))
                } else if ( itemValue === 'More'){
                    dispatch(itemsStatesAction(user.Token))
                    changeAllStates(true)
                } else if ( itemValue === 'Less') {
                    dispatch(reduceItemsStatesAction())
                    changeAllStates(false)
                }

            }
            }
            mode = 'dropdown'
            >
            <Picker.Item label="All" value="All" />
            {itemsStates.map(state => <Picker.Item label={state.Id} value={state.Id} key = {uuidv4()}/>)}
            { !allStates ? <Picker.Item label="More.." value="More" /> : <Picker.Item label="Less.." value="Less" />}
        </Picker>
    );
};