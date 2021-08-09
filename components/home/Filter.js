import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker';


export default () => {
    const [selectedFilter, setSelectedFilter] = useState('');

    return (
        <Picker
            selectedValue={selectedFilter}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedFilter(itemValue)
            }
            mode = 'dropdown'
            >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
        </Picker>
    );
};