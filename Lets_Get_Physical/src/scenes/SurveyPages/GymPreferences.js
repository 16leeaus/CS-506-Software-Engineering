import React , {useState} from 'react';
import { View, Text, TouchableOpacity,FlatList } from 'react-native';
import styles from '../../styles/Survey.screen.style'
//import MultipleChoice from 'react-native-multiple-choice-picker';
// import {
//   SelectMultipleButton,
//   SelectMultipleGroupButton
// } from "react-native-selectmultiple-button";





const GymPreferences = () => {
const timeData = [{id: 1, dataa:"30mins", selected: false},
{id: 2,dataa:"45min", selected: false}, 
{id: 3,dataa:"1hr", selected: false}, 
{id: 4,dataa:"1.5 hrs", selected: false}
];

const gymData = [{id: 1, dataa:"NICK", selected: false},
{id: 2,dataa:"Lakeshore ", selected: false}, 
{id: 3,dataa:"Barre", selected: false}, 
{id: 4,dataa:"Shell", selected: false}
];

const [selectTime, setSelectTime]= useState(timeData)
const [selectGym, setSelectGym]= useState(gymData)
//console.log("sl",selectTime)

const handleOnpress=(item, selectt, func)=>{
  const newItem = selectt.map((val)=>{
    if(val.id==item.id){
      return {...val, selected: !val.selected}
    }else{
      return val;
    }
  })
  func(newItem)
}
   
  return (
    <View style={styles.availabilityBigContainer}>
      
      <View style={styles.selectButtonContainer}>
      <Text> Length of Excersize</Text>
    <FlatList
     horizontal={true}
      data={selectTime}
      keyExtractor={item => item.id}
      renderItem= {({item}) =>{
        return(
          <TouchableOpacity  onPress={()=>handleOnpress(item, selectTime,setSelectTime )}>
          <View >
            <Text  style={styles.selectButton}>{item.dataa}</Text>
          </View>
          </TouchableOpacity>
          
        )
      }}
    />



    <Text> Where to Work Out</Text>
    <FlatList
    horizontal={true}
     data={selectGym}
     keyExtractor={item => item.id}
     renderItem= {({item}) =>{
       return(
         <TouchableOpacity  onPress={()=>handleOnpress(item, selectGym,setSelectGym )}>
         <View >
           <Text  style={styles.selectButton}>{item.dataa}</Text>
         </View>
         </TouchableOpacity>
         
       )
     }}
   />
    </View>
    </View>
            
  );

  
  
}



export default GymPreferences;
