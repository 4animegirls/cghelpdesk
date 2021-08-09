import React, { useState, useEffect } from 'react'
import {Picker} from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux'
import { itemsAction } from '../../actions';
import { v4 as uuidv4 } from 'uuid';


export default () => {
    const [selectedFilter, setSelectedFilter] = useState('');
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const itemsStates = useSelector( state => state.itemsStates)




    return (
        <Picker
            selectedValue={selectedFilter}
            onValueChange={(itemValue, itemIndex) => {
                setSelectedFilter(itemValue)
                dispatch(itemsAction(user.Token, 1, itemValue))
            }
            }
            mode = 'dropdown'
            >
            <Picker.Item label="All" value="All" />
            {itemsStates.map(state => <Picker.Item label={state.Id} value={state.Id} key = {uuidv4()}/>)}
        </Picker>
    );
};