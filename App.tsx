import {Text, View} from 'react-native'
import { SafeAreaView } from 'react-native';

import Loading from "./src/screen/Loading";

const App=()=>{
  return(
    <SafeAreaView style={{flex:1}}>
      <Loading />
    </SafeAreaView>
  )
}

export default App