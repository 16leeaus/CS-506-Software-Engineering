import React , {useState} from 'react';
import { View, Text ,TouchableOpacity} from 'react-native';
import styles from '../../styles/Survey.screen.style'
import DropDownPicker from 'react-native-dropdown-picker';



const WorkoutPreference = ({formData, setFormData}) => {
  
  //Helps backend with u
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Swimming', value: 'swimming'},
    {label: 'Running', value: 'running'},
    {label: 'Weight Lifting', value: 'weights'},
    {label: 'Soccer', value: 'soccer'},
    {label: 'Baseball', value: 'baseball'},
    {label: 'Volleyball', value: 'volleyball'},
    {label: 'Dance', value: 'dance'},
    {label: 'Spin', value: 'spin'},
    {label: 'Cardio', value: 'cardio'},
    {label: 'Biking', value: 'bike'}
   
  ]);
  return (
    
    <View style={styles.workoutContainer}>
      
    
      <DropDownPicker
      style = {styles.availabilityDropdown}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue = {()=> {setValue();
           console.log(value)}}
        setItems={setItems}
        multiple={true}
        //mode="BADGE"
        badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76221"]} 
      />
      </View>
  );
}

export default WorkoutPreference;
