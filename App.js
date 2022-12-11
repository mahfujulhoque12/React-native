import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View,FlatList,Button} from 'react-native';

import GoalItems from './components/GoalItems';
import GoalInput from './components/GoalInputs';

export default function App() {
    const[modalIsVisible,setModalIsVisible]=useState(false);
   const [courseGoals,setCourseGoals]=useState([]);

  function startAddGoalHandaler(){
    setModalIsVisible(true)
  }
function endAddGoalHandaler(){
  setModalIsVisible(false)
}

  function addInputHandaler(enterGoal){
    setCourseGoals(currentCourseGoals=>[...currentCourseGoals,
      {text:enterGoal,id:Math.random().toString()}
    ])
    endAddGoalHandaler()
  };
 
  function deleteGoal(id){
   setCourseGoals(currentCourseGoals=>{
    return currentCourseGoals.filter((goal)=> goal.id !==id);
   })
  }

  return (
   <>
   <StatusBar style="light" />
   <View style={styles.appContainer}>

<Button title='add new goal' color="pink" onPress={startAddGoalHandaler}/>

<GoalInput visible={modalIsVisible} onAddGoal={addInputHandaler} onCancel={endAddGoalHandaler}></GoalInput>

<View style={styles.goalsContainer}>
<FlatList data={courseGoals} renderItem={(itemData)=>{

return <GoalItems text={itemData.item.text} id={itemData.item.id} onDelete={deleteGoal}></GoalItems>
}} 
keyExtractor={(item,index)=>{
  return item.id
}}
alwaysBounceVertical={false} />
</View>
</View>
   </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16,
    backgroundColor:"yellow"
  },

  goalsContainer:{
    flex:5,
  },
 
});
