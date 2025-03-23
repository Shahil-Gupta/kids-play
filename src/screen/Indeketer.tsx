import{ActivityIndicator, ImageBackground, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import images from '../assets/image'
import { useEffect, useState } from 'react';

export const Indeketer=()=>{
    
const Start = ({ navigation }) => { // Accept navigation as a prop
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            navigation.replace('Loading'); // Navigate properly
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);
}
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground style={{flex:1}} imageStyle={{height:"100%",resizeMode:"cover"}}
            source={images.kidImage1}>
                <View style={styles.boxContainer}>
            <Text style={{...styles.texts,marginTop:"20%"}}>🎉 Welcome to the fun zone! 🎈</Text>
            <Text style={{...styles.texts,marginTop:2}}>🏆 Earn stars and have tons of fun!</Text>
            <Text style={{...styles.texts,marginTop:10}}>🏅 Win rewards & unlock cool surprises!</Text>
            <Text style={{...styles.texts,marginTop:30}}>"Play is how kids learn and grow."</Text>
            <Text style={{...styles.texts,marginTop:10,marginBottom:"35%"}}>"Imagination takes flight in every game."</Text>

            </View>
            <ActivityIndicator size={40}  color="blue"/>
            <Text style={{...styles.texts,marginTop:30}}>"Building your fun! Just a few more seconds."</Text>
            </ImageBackground>
        </SafeAreaView>
    )
 }
const styles=StyleSheet.create({
    container:{
        flex:1,   
       },
       boxContainer:{
           justifyContent:"center",alignItems:"center",
       },
   
       texts:{
           fontSize:24, textAlign:"center" ,
       }
})
  