import { View, Text, StatusBar, TextInput, ScrollView, Image, TouchableOpacity, Dimensions, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import { Feather, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const flatListImgCar = [
  {
    id: 1,
    image: require('../image/view-car1.png'),
  },
  {
    id: 2,
    image: require('../image/view-car2.png'),
  },
  {
    id: 3,
    image: require('../image/view-car3.png'),
  },
  {
    id: 4,
    image: require('../image/view-car4.png'),
  },

]
const flatListImgFood = [
  {
    id: 1,
    image: require('../image/view-food1.png'),
  },
  {
    id: 2,
    image: require('../image/view-food2.png'),
  },
  {
    id: 3,
    image: require('../image/view-food3.png'),
  },
  {
    id: 4,
    image: require('../image/view-food4.png'),
  },

]
const flatListImgSend = [
  {
    id: 1,
    image: require('../image/view-send1.png'),
  },
  {
    id: 2,
    image: require('../image/view-send2.png'),
  },


]

const renderItemCar = ({ item, index }) => {

  return (
    <TouchableOpacity style={{ width: 0.8 * windowWidth, height: 200, backgroundColor: 'white', borderRadius: 10, margin: 10 }}>
      <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={item.image} />
    </TouchableOpacity>
  )
}
const renderItemFood = ({ item, index }) => {

  return (
    <TouchableOpacity style={{ width: 0.8 * windowWidth, height: 200, backgroundColor: 'white', borderRadius: 10, margin: 10 }}>
      <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={item.image} />
    </TouchableOpacity>
  )
}
const renderItemSend = ({ item, index }) => {

  return (
    <TouchableOpacity style={{ width: 0.8 * windowWidth, height: 200, backgroundColor: 'white', borderRadius: 10, margin: 10 }}>
      <Image style={{ width: '100%', height: '100%' }} resizeMode='stretch' source={item.image} />
    </TouchableOpacity>
  )
}

export default function Home() {
  const navigation = useNavigation();
  const [dataCar, setDataCar] = useState(flatListImgCar);
  const [dataFood, setDataFood] = useState(flatListImgFood);
  const [dataSend, setDataSend] = useState(flatListImgSend);
  const [isRender, setisRender] = useState(false);
  return (

    <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>

      <StatusBar barStyle='dark-content' />
      {/* Component Header */}
      <View style={{ height: 70, width: '100%', backgroundColor: 'green', flexDirection: 'row' }}>
        {/* Search */}
        <View style={{ width: '100%', height: 70, marginTop: 12 }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: 'white', marginLeft: 10, borderRadius: 100, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
              <Feather name="search" size={24} color="black" />
              <TextInput placeholder='Tìm dịch vụ, món ngon, địa điểm' style={{ fontSize: 15, color: 'gray', width: 400, height: 30, borderWidth: -1 }}></TextInput >
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Component Body */}
      <View style={{ height: '85%', width: '100%', flexDirection: 'column', backgroundColor: 'white' }}>
        <ScrollView style={{ marginHorizontal: 10 }} pagingEnabled={true} >
          {/* Component service */}
          <View style={{ height: 100, width: '100%', flexDirection: 'row', padding: 10, justifyContent: 'space-between' }}>
            {/* Image goride */}
            <TouchableOpacity style={{ width: '20%', height: '70%' }}
              onPress={() => navigation.navigate("GoBike")}
            >
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 5, }}>
                <Image style={{ width: '70%', height: '100%', marginTop: 20, borderRadius: '100%' }} source={require('../image/bike.png')} resizeMode='contain' />
                <Text style={{ fontSize: 11, fontWeight: '600' }}>Xe máy</Text>
              </View>
            </TouchableOpacity>

            {/* Image gocar */}
            <TouchableOpacity style={{ width: '20%', height: '70%' }}
              onPress={() => navigation.navigate('GoCar')}
            >
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Image style={{ width: '80%', height: '100%', marginTop: 20, borderRadius: '100%', }} source={require('../image/car.png')} resizeMode='contain' />
                <Text style={{ fontSize: 11, fontWeight: '600' }}>Ô tô</Text>
              </View>
            </TouchableOpacity>


            {/* Image gofood */}
            <TouchableOpacity style={{ width: '20%', height: '70%' }}
              onPress={() => navigation.navigate('GoFood')}
            >
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Image style={{ width: '100%', height: '100%', marginTop: 20, borderRadius: '100%' }} source={require('../image/menu.png')} resizeMode='contain' />
                <Text style={{ fontSize: 11, fontWeight: '600' }}>Đồ ăn</Text>
              </View>
            </TouchableOpacity>

            {/* Image gosend */}
            <TouchableOpacity style={{ width: '20%', height: '70%' }}
              onPress={() => navigation.navigate('GoSend')}
            >
              <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                <Image style={{ width: '100%', height: '100%', marginTop: 20 }} source={require('../image/gosend.png')} resizeMode='contain' />
                <Text style={{ fontSize: 11, fontWeight: '600' }}>Giao Hàng</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ height: 400, width: '100%' }}>
            <View style={{ height: 40, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../image/search.png')} resizeMode='stretch' />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 5 }}>Đặt ngay</Text>
              </View>
            </View>

            <View style={{ height: 30, width: '100%', }}>
              <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 5 }}>Đặt ngay, càng đặt càng lời</Text>
            </View>
            <View style={{ height: 270, width: '100%' }}>
              <FlatList
                data={dataCar}
                renderItem={renderItemCar}
                horizontal={true}
                style={{ marginTop: 10 }}>
              </FlatList>
            </View>

          </View>
          <View style={{ height: 400, width: '100%', marginTop: -80 }}>
            <View style={{ height: 40, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 1 }}>
              <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../image/cutlery.png')} resizeMode='stretch' />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 5 }}>Đặt đồ ăn ngay</Text>
              </View>
            </View>

            <View style={{ height: 30, width: '100%' }}>
              <Text style={{ fontSize: 18, fontWeight: '800', marginTop: 5 }}>Ở đây có món ngon bạn thích!</Text>
            </View>
            <View style={{ height: 270, width: '100%' }}>
              <FlatList
                data={dataFood}
                renderItem={renderItemFood}
                horizontal={true}
                style={{ marginTop: 1 }}>
              </FlatList>
            </View>
          </View>
          {/* Component Gosend */}
          <View style={{ height: 250, width: '100%', marginTop: -80 }}>
            <View style={{ height: 40, width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
              <View style={{ height: 25, width: 25, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require('../image/gift-box.png')} resizeMode='stretch' />
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '600', marginLeft: 5 }}>Giao hàng ngay</Text>
              </View>
            </View>

            <View style={{ backgroundColor: 'white', height: 50, width: '100%', flexDirection: 'row' }}>
              <Text style={{ fontSize: 18, color: 'gray' }}>
                <View style={{ width: 30, height: 30 }}>
                  <Image style={{ width: '100%', height: '100%' }} source={require('../image/giftbox.png')} resizeMode='stretch' />
                </View>
                Giao hàng nhanh có Gojek Express</Text>
            </View>

            {/* scrollview gosend */}
            <View style={{ height: 270, width: '100%' }}>
              <FlatList
                data={dataSend}
                renderItem={renderItemSend}
                horizontal={true}
                style={{ marginTop: 10 }}>
              </FlatList>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={{ width: '100%', height: 200 }} />

    </SafeAreaView>

  )
}
