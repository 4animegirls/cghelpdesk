import React, { useState, useRef, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import { useDispatch, useSelector } from 'react-redux';
import { itemsAction, changeStatesFilter } from '../../actions';
import { v4 as uuidv4 } from 'uuid';
import { mostUsedStates } from '../../config';
import { Button, ButtonGroup, Icon, Text } from '@ui-kitten/components';
import i18n from 'i18n-js';
import Search from './Search';


export default () => {
    const selectedFilter = useSelector(state => state.statesFilter);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const searchFilter = useSelector(state => state.searchFilter);
    const itemsStates = useSelector(state => state.itemsStates);
    const [allStates, changeAllStates] = useState(false);
    const filterRef = useRef();

    const open = () => {
        filterRef.current?.focus();
    }

    const close = () => {
        filterRef.current?.blur();
    }

    const picker = () => (
        <Picker
            ref={filterRef}
            selectedValue={selectedFilter}
            style = {filterRef.current && {...{display: 'none'}}}
            onValueChange={(itemValue, itemIndex) => {
                if (itemValue !== 'More' && itemValue !== 'Less') {
                    dispatch(changeStatesFilter(itemValue))
                    dispatch(itemsAction(user.Token, 1, [['Id', itemValue], searchFilter]))
                } else if (itemValue === 'More') {
                    changeAllStates(true)

                } else if (itemValue === 'Less') {
                    changeAllStates(false)
                }

            }
            }

        >
            <Picker.Item label={i18n.t('filter.all')} value="" />
            {allStates
                //depending on allStates bool decides to render mostUsedStates or allStates
                ? itemsStates.map(state => <Picker.Item label={state.Id} value={state.Id} key={uuidv4()} />)
                : itemsStates.map(state => mostUsedStates.includes(state.Id) && <Picker.Item label={state.Id} value={state.Id} key={uuidv4()} />)}

            {!allStates ? <Picker.Item label={i18n.t('filter.more')} value="More" onSelect /> : <Picker.Item label={i18n.t('filter.less')} value="Less" />}
        </Picker>
    )




    //pickerStyleType = {{width: 20}}
    return (
        <>
            <ButtonGroup appearance='ghost' status='warning'>
                <Button onPress={open} accessoryLeft={<Icon name='funnel' />} status='warning' accessoryRight= { picker }/>
                <Search Token={user.Token} />
            </ButtonGroup>
        </>
    );
};