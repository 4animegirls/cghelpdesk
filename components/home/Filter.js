import React, { useState, useEffect } from 'react'
import {Picker} from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux'
import { itemsAction, itemsStatesAction, reduceItemsStatesAction } from '../../actions';
import { v4 as uuidv4 } from 'uuid';
import { mostUsedStates } from '../../config';


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
                    changeAllStates(true)
                } else if ( itemValue === 'Less') {
                    changeAllStates(false)
                }

            }
            }
            mode = 'dropdown'
            >
            <Picker.Item label="All" value="All" />
            {allStates          
            //depending on allStates bool decides to render mostUsedStates or allStates
            ? itemsStates.map(state => <Picker.Item label={state.Id} value={state.Id} key = {uuidv4()}/>)
            : itemsStates.map(state => mostUsedStates.includes(state.Id) && <Picker.Item label={state.Id} value={state.Id} key = {uuidv4()}/>)}
            
            { !allStates ? <Picker.Item label="More.." value="More" /> : <Picker.Item label="Less.." value="Less" />}
        </Picker>
    );
};