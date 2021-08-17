import React, { useState } from 'react';
import { ViewPager } from '@ui-kitten/components';
import DetailedInfo from './DetailedInfo';
import Files from './Files';
import Assessment from './Assessment';
import Realization from './Realization';
import Conclusion from './Conclusion';
import Workflow from './Workflow';
import Email from './Email';
import Merge from './Merge';
import Testing from './Testing';
import Hotline from './Hotline';

export default (props) => {
  const [selectedIndex, setSelectedIndex] = useState('')
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <DetailedInfo {...props} />
      <Files {...props} />
      <Assessment {...props} />
      <Realization {...props} />
      <Conclusion {...props} />
      <Workflow {...props} />
      <Email {...props}/>
      <Hotline {...props} />
      <Merge {...props} />
      <Testing {...props} />
    </ViewPager>
  )
}