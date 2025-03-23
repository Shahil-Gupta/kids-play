import {Text, View} from 'react-native'
import { SafeAreaView } from 'react-native';

import Loading from "./src/screen/Loading";
import { Home } from './src/screen/Home';
import { Indeketer } from './src/screen/Indeketer';

const App=()=>{
  return(
    <SafeAreaView style={{flex:1}}>
      <Indeketer />
    </SafeAreaView>
  )
}

export default App