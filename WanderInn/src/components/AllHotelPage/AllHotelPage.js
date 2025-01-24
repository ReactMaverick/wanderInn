import {View, ScrollView, FlatList} from 'react-native';
import {styles} from './Style';
import HeaderScreen from '../Header/Header';
import PopularHotels from '../PopularHotels/PopularHotels';

export default function AllHotelsPage({
  hotels,
  page,
  setPage,
  totalPages,
  navigation,
}) {
  // console.log('AllHotelsPage hotels==> ', hotels);
  const loadMoreData = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  return (
    <>
      <HeaderScreen navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          {hotels?.map((hotel, index) => {
            return (
              <PopularHotels
                key={index}
                hotel={hotel}
                navigation={navigation}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
