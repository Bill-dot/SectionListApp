import React, { Component } from 'react';
import { View,Text, StyleSheet, SectionList,TouchableOpacity} from 'react-native';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      title: ''
    }
  }

  render()
  {
    return(
      <View>
       <Text style={styles.text}>{this.state.title}</Text>
        <SectionList 
         sections={Mobiles}
         keyExtractor={(item, index)=> item+index}
         renderItem={({item})=>{ 
          
           return (
            <View>
          <TouchableOpacity onPress={()=>this.setState({title:item})}>
           <Text style={styles.item} 
            // onPress={()=> {
            //   return this.setState({title:item})}}
           >{item}</Text>
           </TouchableOpacity>
           </View>
           )}}
          renderSectionHeader={({section})=>{return <Text style={styles.header}>{section.title}</Text>}}
         
        />
      </View>
    )
  }


}

const Mobiles=[
  {title:'Samsung', data:["Galaxy m30", "Galaxy ON", "Galaxy Note pro"]},
  {title:'Redmi', data:["NOTE 5 PRO", "NOTE 6 PRO", "NOTE 7 PRO", "REDMI 8"]},
  {title:'Apple', data:["iPhone 7","iPhone 7 Pro", "iPhone 10", "iPhone 11", "iPhone 11 Pro"]}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    fontSize:20,
    fontStyle:'italic',
    backgroundColor: '#cccccc',
    borderRadius: 5,
    margin:3,
    padding:10
  },
  header:{
    fontSize:30,
    fontWeight: 'bold',
    backgroundColor:'#333333',
    color: 'white',
    marginTop:15,
    borderRadius:5,
    textAlign: 'center',
    padding:10
  },
  text:{
    fontWeight:'bold',
    fontSize:40
  }
});
