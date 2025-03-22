import { Dimensions, Image, SafeAreaView,StyleSheet, Text,TouchableOpacity,View} from 'react-native'
import images from '../assets/image'
import { useState } from 'react'

const{width}=Dimensions.get('window')

const Loading=()=>{
    const[select,setSelect]=useState(null) as any
    const[show,setShow]=useState(false)
    return(
        <SafeAreaView style={styles.container}>
            <Image source={images.kidsImage} style={styles.imageLogo}/>
            <View>
                <Text style={styles.ageText}>select your Age</Text>
                <TouchableOpacity style={[styles.years ,select ==="4-5years" && styles.setSelected]} onPress={()=>{setSelect("4-5years"),setShow(true)}}>
                    <Text style={styles.age}>4-5 years</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.years ,select ==="6-7years" && styles.setSelected]} onPress={()=>{setSelect("6-7years"),setShow(true)}}>
                    <Text style={styles.age}>6-7 years</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.years ,select ==="8-10years" && styles.setSelected]} onPress={()=>{setSelect("8-10years"),setShow(true)}}>
                    <Text style={styles.age}>8-10 years</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.years ,select ==="10-12years" && styles.setSelected]} onPress={()=>{setSelect("10-12years"),setShow(true)}}>
                    <Text style={styles.age}>10-12 years</Text>
                </TouchableOpacity>
            </View>
           {
            show===true ?  <TouchableOpacity style={styles.submitTouch}>
            <Text style={styles.subText}>Submit</Text>
        </TouchableOpacity> : null
           }
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
    },
    imageLogo:{
        height:150,width:150,borderRadius:100,marginTop:"32%",marginBottom:"10%"
    },
    ageText:{
        height:45,width:width-40,backgroundColor:"#fff",borderRadius:13,marginTop:20,textAlign:"center",textAlignVertical:"center",fontSize:18,fontWeight:"600",marginBottom:"8%"
    },
    years:{
        height:45,width:width-40,borderWidth:2,borderRadius:13,alignItems:"center",justifyContent:"center",marginBottom:"5%",
    },
    age:{
        fontSize:16,fontWeight:"500",
    },
    setSelected:{
        color:"#000",
        borderColor:"#bbb"
    },
    submitTouch:{
        backgroundColor:"#97ded6",height:45,width:width-40,borderRadius:13,justifyContent:"center",alignItems:"center",
    },
    subText:{
        fontSize:18,fontWeight:"600",
    }
})
export default Loading