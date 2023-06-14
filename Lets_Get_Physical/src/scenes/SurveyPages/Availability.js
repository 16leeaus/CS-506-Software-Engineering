import React , { useState } from 'react';
import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/Survey.screen.style'

const Availability = () => {
  const [mopen, msetOpen] = useState(false);
  const [mvalue, msetValue] = useState(['mmorning']);
  const [mitems, msetItems] = useState([
    {label: 'Morning', value: 'morning'},
    {label: 'Afternoon', value: 'afternoon'},
    {label: 'Evening', value: 'evening'},
    {label: 'Night', value: 'night'},
   
  ]);
  
    const [tueopen, tuesetOpen] = useState(false);
    const [tuevalue, tuesetValue] = useState(['morning']);
    const [tueitems, tuesetItems] = useState([
      {label: 'Morning', value: 'morning'},
      {label: 'Afternoon', value: 'afternoon'},
      {label: 'Evening', value: 'evening'},
      {label: 'Night', value: 'night'},
     
    ]);


    const [wedopen, wedsetOpen] = useState(false);
    const [wedvalue, wedsetValue] = useState(['morning']);
    const [weditems, wedsetItems] = useState([
      {label: 'Morning', value: 'morning'},
      {label: 'Afternoon', value: 'afternoon'},
      {label: 'Evening', value: 'evening'},
      {label: 'Night', value: 'night'},
     
    ]);
    const [thuropen, thursetOpen] = useState(false);
    const [thurvalue, thursetValue] = useState(['morning']);
    const [thuritems, thursetItems] = useState([
      {label: 'Morning', value: 'morning'},
      {label: 'Afternoon', value: 'afternoon'},
      {label: 'Evening', value: 'evening'},
      {label: 'Night', value: 'night'},
     
    ]);
    const [friopen, frisetOpen] = useState(false);
    const [frivalue, frisetValue] = useState(['morning']);
    const [friitems, frisetItems] = useState([
      {label: 'Morning', value: 'morning'},
      {label: 'Afternoon', value: 'afternoon'},
      {label: 'Evening', value: 'evening'},
      {label: 'Night', value: 'night'},
     
    ]);

    const [satopen, satsetOpen] = useState(false);
    const [satvalue, satsetValue] = useState(['morning']);
    const [satitems, satsetItems] = useState([
      {label: 'Morning', value: 'morning'},
      {label: 'Afternoon', value: 'afternoon'},
      {label: 'Evening', value: 'evening'},
      {label: 'Night', value: 'night'},
     
    ]);
    const [sunopen, sunsetOpen] = useState(false);
    const [sunvalue, sunsetValue] = useState(['morning']);
    const [sunitems, sunsetItems] = useState([
      {label: 'Morning', value: 'morning'},
      {label: 'Afternoon', value: 'afternoon'},
      {label: 'Evening', value: 'evening'},
      {label: 'Night', value: 'night'},
     
    ]);


  return (
    <View style={styles.availabilityBigContainer}>
    

    <View style={styles.availabilityContainer}>
    <Text style={styles.availabilityLabels}>Monday</Text>
    <Text style={styles.availabilityLabels}>Tuesday</Text>
    <Text style={styles.availabilityLabels}>Wednesday</Text>
    </View>
      <View style={styles.availabilityContainer}>
        <DropDownPicker
          style = {styles.availabilityDropdown}
          open={mopen}
          value={mvalue}
          items={mitems}
          setOpen={msetOpen}
          setValue={msetValue}
          setItems={msetItems}
          multiple={true}
          mode="BADGE"
          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} Monday
        />
        <DropDownPicker
          style = {styles.availabilityDropdown}
          open={tueopen}
          value={tuevalue}
          items={tueitems}
          setOpen={tuesetOpen}
          setValue={tuesetValue}
          setItems={tuesetItems}
          multiple={true}
          mode="BADGE"
          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} Tuesday
        /><DropDownPicker
        style = {styles.availabilityDropdown}
        open={wedopen}
        value={wedvalue}
        items={weditems}
        setOpen={wedsetOpen}
        setValue={wedsetValue}
        setItems={wedsetItems}
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} Tuesday
      />
      </View>
      <View style={styles.availabilityContainer}>
      <Text style={styles.availabilityLabels}>Thursday</Text>
      <Text style={styles.availabilityLabels}>Friday</Text>
      <Text style={styles.availabilityLabels}>Saturday</Text>
      </View>
      <View style={styles.availabilityContainer}>
        <DropDownPicker
          style = {styles.availabilityDropdown}
          open={thuropen}
          value={thurvalue}
          items={thuritems}
          setOpen={thursetOpen}
          setValue={thursetValue}
          setItems={thursetItems}
          multiple={true}
          mode="BADGE"
          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} 
        />
        <DropDownPicker
          style = {styles.availabilityDropdown}
          open={friopen}
          value={frivalue}
          items={friitems}
          setOpen={frisetOpen}
          setValue={frisetValue}
          setItems={frisetItems}
          multiple={true}
          mode="BADGE"
          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} 
        /><DropDownPicker
        style = {styles.availabilityDropdown}
        open={satopen}
        value={satvalue}
        items={satitems}
        setOpen={satsetOpen}
        setValue={satsetValue}
        setItems={satsetItems}
        multiple={true}
        mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} 
      />
      </View>
      <View style={styles.availabilityContainer}>
    <Text style={styles.availabilityLabels}>Sunday</Text>
    </View>

      <View style={styles.availabilityContainer}>
        <DropDownPicker
          style = {styles.availabilityDropdown}
          open={sunopen}
          value={sunvalue}
          items={sunitems}
          setOpen={sunsetOpen}
          setValue={sunsetValue}
          setItems={sunsetItems}
          multiple={true}
          mode="BADGE"
          badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} Monday
        />
        </View>
    </View>
  );
}

export default Availability;
