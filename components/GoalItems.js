import { StyleSheet,View,Text, Pressable } from "react-native";

function GoalItems(props){
    return(
      <View style={styles.goalItem}> 
      <Pressable android_ripple={{color:"pink"}} onPress={props.onDelete.bind(this,props.id)}>
            <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
      </View>
    )
};

export default GoalItems;

const styles=StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:"orange",
      },
      goalText:{
        color:"#FFF",
        padding:8,
      }
})