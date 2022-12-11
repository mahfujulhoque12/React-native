import { useState } from "react";
import { View,TextInput,Button,StyleSheet,Modal,Image} from "react-native";

function goalInput(props){
    const [enterGoal,setEnterGoal]=useState('');
    
  function goalInputHandaler(enteredText){
    setEnterGoal(enteredText)
};
function addGoalHandaler(){
    props.onAddGoal(enterGoal)
    setEnterGoal('')
}

return(
    <Modal visible={props.visible} animationType="slide"> 
    <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/image/favicon.png')}></Image>
    <TextInput style={styles.textInput} placeholder='your text goal' onChangeText={goalInputHandaler} value={enterGoal}/>

   <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <Button title='add goal' onPress={addGoalHandaler} color="green"/>
        </View>
        <View style={styles.button}>
        <Button title="cancel" onPress={props.onCancel} color="red"/>
        </View>
   </View>
   </View>
   </Modal>
)
}

export default goalInput;

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:"#cccccc",
        backgroundColor:"#19D05Cs"
      },
      textInput:{
        borderWidth:1,
        borderColor:'red',
        width:'100%',
        padding:8
      },
      buttonContainer:{
        flexDirection:"row",
        marginTop:8
      },
      button:{
        width:100,
        marginHorizontal:8
      },
      image:{
        height:100,
        width:100,
        margin:8,
      }
})