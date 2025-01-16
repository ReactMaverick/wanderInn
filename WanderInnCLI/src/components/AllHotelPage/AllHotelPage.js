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
  console.log('AllHotelsPage hotels==> ', hotels);
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
          {/* <FlatList
                        // data={hotels}
                    //    style={styles.flatListStyle}
                        // showsVerticalScrollIndicator={false}
                        // refreshing={refreshing}
                        // onRefresh={onRefresh}
                        // onEndReached={loadMoreData}
                        // onEndReachedThreshold={0.5} 
                        // ListFooterComponent={renderFooter}
                        // onScroll={() => {
                            // setIsThreeDotMenuPressed(false);
                        // }}
                        // renderItem={({ item }) => (<PopularHotelsScreen
                            // hotel={item}
                            // isListUpdate={isListUpdate}
                            // setIsListUpdate={setIsListUpdate}
                            // onRefresh={onRefresh}
                            // navigation={navigation}
                            // isLoading={loading}
                            // setIsLoading={setLoading}
                            // isThreeDotMenuPressed={isThreeDotMenuPressed}
                            // setIsThreeDotMenuPressed={setIsThreeDotMenuPressed}
                        // />)} 

                    // />  */}
        </View>
      </ScrollView>
    </>
  );
}
