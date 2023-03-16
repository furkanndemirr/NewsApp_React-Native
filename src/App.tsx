import React from 'react';
import { Text,View,SafeAreaView,FlatList, StyleSheet,ScrollView, Image, Dimensions } from "react-native";
//react native in veri görüntüleme kendi list componenti => flatlist.
import news_data from './news_data.json';
import NewsCard  from './components/NewsCard';
import news_banner_data from './news_banner_data.json';
function App() {
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>
          Haber Apps
        </Text>
        
        <FlatList
        ListHeaderComponent={()=><ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          news_banner_data.map(bannerNews => <Image style={styles.banner_image} source={{uri:bannerNews.imageUrl}}/>)
        }
      </ScrollView>}
        keyExtractor={(item) => item.u_id.toString()}
        data={news_data}
        renderItem={({item})=><NewsCard news={item} />}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eceff1'
  },
  header:{
    fontWeight:'bold',
    fontSize:25,
    color:'black',
    textAlign:'center'
  },
  banner_image:{
    height:Dimensions.get('window').height / 5,
    width:Dimensions.get('window').width / 2
  }
})
export default App;