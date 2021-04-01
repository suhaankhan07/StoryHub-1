import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ReadStory from './ReadStoryScreen'


export default class WriteStory extends React.Component {
 constructor() {
   super();
   this.state = {
     storyTitle: "",
     storyPlot: "",
     storyEnd: "",
   }
 }

  storyTitle = (text) => {
    this.setState({storyTitle:text})
  }

  storyPlot = (text) => {
    this.setState({storyPlot:text})
  }

  storyEnd = (text) => {
    this.setState({storyEnd:text})
  }


  render() {
    return(
      <View>
       <Text style = {styles.text}> Story Hub </Text>
        <TextInput style = {{height:20,width:100, borderColor = "purple", borderWidth = 2}}
         placeholder = "Story Title"
         placeholderTextColor = "purple"
         onChangeText = {this.storyTitle}
         props:multiline = {true}
        />
         <TextInput style = {{height:20,width:100, borderColor = "purple", borderWidth = 2}}
         placeholder = "Story Author(you probably):"
         placeholderTextColor = "purple"
         onChangeText = {this.storyEnd}
         props:multiline = {true}
        />
        <TextInput style = {{height:120,width:100, borderColor = "purple", borderWidth = 2}}
         placeholder = "Story"
         placeholderTextColor = "purple"
         onChangeText = {this.storyPlot}
         props:multiline = {true}
        />
         <TouchableOpacity style = {styles.button}>
           <Text style ={{fontSize:16,fontWeight:'bold'}}> Sumbit </Text>
         </TouchableOpacity>
        <ReadStory  
         
        
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'red',
    backgroundColor:'white',
    fontSize:25,
    alignSelf:'center',
    textShadowColor:'white',
    textShadowOffset:7,
    fontWeight:'bold',
  },
  button:{
   backgroundColor:'lightpink',
   height:30,
   width:45,
   buttonRadius:12
  },
});
