import React, { useState, useRef, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { itemsAction, changeStatesFilter } from '../../actions';
import { v4 as uuidv4 } from 'uuid';
import { mostUsedStates } from '../../config';
import { Button, Icon } from '@ui-kitten/components';
import i18n from 'i18n-js';


export default () => {
    const selectedFilter = useSelector(state => state.statesFilter);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const itemsStates = useSelector(state => state.itemsStates);
    const [allStates, changeAllStates] = useState(false);
    const filterRef = useRef();

    const open = () => {
        filterRef?.current?.focus();
    }

    const close = () => {
        filterRef?.current?.blur();
    }


    //pickerStyleType = {{width: 20}}
    return (
    <Button onPress = {open} appearance='ghost' >
        <Icon name='funnel' style={{width:20, height:20}} fill = '#fff'/>
        <Picker
            ref={filterRef}
            selectedValue={selectedFilter}
            onValueChange={(itemValue, itemIndex) => {
                if (itemValue !== 'More' && itemValue !== 'Less') {
                    dispatch(changeStatesFilter(itemValue))
                    dispatch(itemsAction(user.Token, 1, itemValue))
                } else if (itemValue === 'More') {
                    changeAllStates(true)

                } else if (itemValue === 'Less') {
                    changeAllStates(false)
                }

            }
            }

        >
            <Picker.Item label={i18n.t('filter.all')} value="All" />
            {allStates
                //depending on allStates bool decides to render mostUsedStates or allStates
                ? itemsStates.map(state => <Picker.Item label={state.Id} value={state.Id} key={uuidv4()} />)
                : itemsStates.map(state => mostUsedStates.includes(state.Id) && <Picker.Item label={state.Id} value={state.Id} key={uuidv4()} />)}

            {!allStates ? <Picker.Item label={i18n.t('filter.more')} value="More" onSelect /> : <Picker.Item label={i18n.t('filter.less')} value="Less" />}
        </Picker>
    </Button>
    );
};