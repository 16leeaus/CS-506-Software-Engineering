import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
    alignItems: 'center',
},
navButtonContainer:{
    width: '60%',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop:40,
    alignItems: 'center',
},
navButton:{
    backgroundColor: '#C2F72F',
    width : "70%",
    padding: 15,
    marginLeft:10,
    marginRight:10,
    borderRadius: 10,
    alignItems: 'center',
},

input:{
    backgroundColor: 'white',
    paddingHorizontal:15,

    paddingVertical:10,
    borderRadius:10,
    marginTop: 5,
},
buttonOutline: {
    backgroundColor: 'white',
    marginTop : 5,
    borderColor :'#0782F9',
    borderWidth:2,
},
availabilityContainer: {
    width:'40%',
    paddingHorizontal:20,
    flexDirection: 'row',
    backgroundColor: "#fff"
},
availabilityLabels: {
    height:30,
    width:'60%',
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal:5,
    marginHorizontal:30,
    paddingVertical: 5,
   
    //backgroundColor: "#ffa"
},

availabilityBigContainer: {
    padding:20,
    alignSelf:'center',
    height:'90%',
    width:'90%',
    backgroundColor:'yellow'
},

availabilityDropdown: {
    
    // width: '50%',
    // alignItems: 'center',
    // marginHorizontal: "1%",
    // marginBottom: 6, 
    // paddingHorizontal: 8,
    // paddingVertical: 6,
    // fontSize: 8,
    
},
workoutContainer: {
    //width:'70%',
      height:'40%',
      //alignItems: '
      marginTop:40,
      
    
      fontSize: 8,
      justifyContent: 'center',
      //paddingHorizontal: 15,
    flexDirection: 'row'
},
workoutDropdown: {
    width:'80%',
    
    alignSelf: 'center',
    paddingHorizontal: 15,
    alignItems: 'center',
    fontSize: 8,
    justifyContent: 'center'
},

buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:16,

},
buttonOutlineText:{
    color:'#0782F9',
    fontWeight:'700',
    fontSize:16,
},
selectButtonContainer:{
    padding:10,
    alignItems:'center',
    justifyContent: 'space-between'
    
},
selectButton:{
    backgroundColor:'lightblue',
    textAlign: 'center',
    margin:10,
    borderRadius: 10,
    borderColor:'green',
    borderWidth:2,
    marginHorizontal:5,
    padding:5,
    width:60,
    height:30,
    borderRadius: 10,
    
    
    
},
})