import Searchbar from '../components/Searchbar';
import TabviewMenu from '../components/TabviewMenu';
import { View } from 'react-native';
import { useState } from 'react';

export default function Search({navigation}) {
  const [data, setData] = useState([]);

  const handleDataEntered = (value) => {
    getData(value)
  }

  const getData = async (value) => {
    var myHeaders = new Headers();
    myHeaders.append("X-API-KEY", "bb25274d75c8fb32015c3947e328e15eeee31276");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "q": `${value}`,
      "num": 20,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    setTimeout(() => {
      
    }, 3000)
    
    try {
      const response = await fetch("https://google.serper.dev/search", requestOptions);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <>
        <View style={{ flex: 1}}>
          <Searchbar onDataEntered={handleDataEntered} />
          <TabviewMenu data={data} navigation={navigation} />
        </View>
    </>
  );
}
