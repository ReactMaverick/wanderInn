import {useState} from 'react';
import {FlatList, Image, Pressable, ScrollView, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {deviceHeight} from '../../constants/constants';
import {styles} from './Style';
import * as Progress from 'react-native-progress';
import {HOTEL, HOTEL1, USER3, USER4} from '../../constants/images';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ReviewsPage({navigation}) {
  const [isLIke, setIsLIke] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.screenBg,
        height: deviceHeight,
      }}>
      <View style={styles.BackHeader}>
        <View style={styles.BackHeaderInner}>
          <View style={styles.backHeaderBtn}>
            <Pressable
              style={styles.backBtn}
              onPress={() => {
                console.log('back');
                navigation.goBack();
              }}>
              <Icon name="chevron-back" style={styles.backBtnIcon} />
            </Pressable>
          </View>

          <View style={styles.backHeaderTitle}>
            <Text style={styles.HeaderTitle}>Review & Ratings</Text>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.reviewRow}>
            <View style={styles.reviewLeftBox}>
              <Text style={styles.reviewTitle}>4/5</Text>
              <Text style={styles.reviewSubTitle}>Excellent</Text>
            </View>
            <View style={styles.reviewRightBox}>
              <View style={styles.reviewRightBoxInner}>
                <Text style={styles.reviewRightBoxTitle}>5. Excellent</Text>
                <View style={styles.reviewRightBoxProgress}>
                  <View style={styles.reviewRightProgressBar}>
                    <Progress.Bar
                      animated={true}
                      height={deviceHeight / 80 - 5} // Height of the progress bar
                      progress={0.9}
                      width={null} // Use null to stretch the bar to the full width of its container
                      color={colors.primary} // Color of the progress bar
                      unfilledColor={colors.lightBlue} // Color of the unfilled area
                      borderWidth={0} // Remove border
                      borderRadius={10} // Rounded corners of the bar
                    />
                  </View>
                  <Text style={styles.reviewRightBoxTitle}>90</Text>
                </View>
              </View>
              <View style={styles.reviewRightBoxInner}>
                <Text style={styles.reviewRightBoxTitle}>4. Very good</Text>
                <View style={styles.reviewRightBoxProgress}>
                  <View style={styles.reviewRightProgressBar}>
                    <Progress.Bar
                      animated={true}
                      height={deviceHeight / 80 - 5} // Height of the progress bar
                      progress={0.7}
                      width={null} // Use null to stretch the bar to the full width of its container
                      color={colors.primary} // Color of the progress bar
                      unfilledColor={colors.lightBlue} // Color of the unfilled area
                      borderWidth={0} // Remove border
                      borderRadius={10} // Rounded corners of the bar
                    />
                  </View>
                  <Text style={styles.reviewRightBoxTitle}>70</Text>
                </View>
              </View>
              <View style={styles.reviewRightBoxInner}>
                <Text style={styles.reviewRightBoxTitle}>5. Good</Text>
                <View style={styles.reviewRightBoxProgress}>
                  <View style={styles.reviewRightProgressBar}>
                    <Progress.Bar
                      animated={true}
                      height={deviceHeight / 80 - 5} // Height of the progress bar
                      progress={0.5}
                      width={null} // Use null to stretch the bar to the full width of its container
                      color={colors.primary} // Color of the progress bar
                      unfilledColor={colors.lightBlue} // Color of the unfilled area
                      borderWidth={0} // Remove border
                      borderRadius={10} // Rounded corners of the bar
                    />
                  </View>
                  <Text style={styles.reviewRightBoxTitle}>55</Text>
                </View>
              </View>
              <View style={styles.reviewRightBoxInner}>
                <Text style={styles.reviewRightBoxTitle}>5. Average</Text>
                <View style={styles.reviewRightBoxProgress}>
                  <View style={styles.reviewRightProgressBar}>
                    <Progress.Bar
                      animated={true}
                      height={deviceHeight / 80 - 5} // Height of the progress bar
                      progress={0.3}
                      width={null} // Use null to stretch the bar to the full width of its container
                      color={colors.primary} // Color of the progress bar
                      unfilledColor={colors.lightBlue} // Color of the unfilled area
                      borderWidth={0} // Remove border
                      borderRadius={10} // Rounded corners of the bar
                    />
                  </View>
                  <Text style={styles.reviewRightBoxTitle}>30</Text>
                </View>
              </View>
              <View style={styles.reviewRightBoxInner}>
                <Text style={styles.reviewRightBoxTitle}>5. Poor</Text>
                <View style={styles.reviewRightBoxProgress}>
                  <View style={styles.reviewRightProgressBar}>
                    <Progress.Bar
                      animated={true}
                      height={deviceHeight / 80 - 5} // Height of the progress bar
                      progress={0.2}
                      width={null} // Use null to stretch the bar to the full width of its container
                      color={colors.primary} // Color of the progress bar
                      unfilledColor={colors.lightBlue} // Color of the unfilled area
                      borderWidth={0} // Remove border
                      borderRadius={10} // Rounded corners of the bar
                    />
                  </View>
                  <Text style={styles.reviewRightBoxTitle}>05</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* catagorys of reviews */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[
            {key: '1', title: 'All Guest'},
            {key: '2', title: 'Family'},
            {key: '3', title: 'Friends'},
            {key: '4', title: 'Couples'},
          ]}
          renderItem={({item}) => (
            <View style={styles.ReviewCatagoryBox}>
              <Text style={styles.ReviewCatagoryBoxTitle}>{item.title}</Text>
            </View>
          )}
        />
        <View style={styles.container}>
          <View style={styles.reviewMAinBox}>
            <View style={styles.reviewHead}>
              <Text style={styles.reviewHeadTitle}>All (5967)Reviews</Text>
            </View>
            <View style={styles.reviewBody}>
              <View style={styles.reviewBodyHead}>
                <View style={styles.UserINfoBox}>
                  <Image source={USER4} style={styles.UserImage} />
                  <View style={styles.UserINfo}>
                    <Text style={styles.UserName}>Lisa Angles</Text>
                    <View style={styles.UserPostDateBox}>
                      <Text style={styles.UserDate}>Friend</Text>
                      <View style={styles.Dot} />
                      <Text style={styles.UserDate}>23 April, 2024</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.ReviewStarBox}>
                  <Text style={styles.ReviewStarText}>4.5</Text>
                  <Icon name="star" style={styles.ReviewStar} />
                </View>
              </View>
              <View style={styles.ReviewDetailsBox}>
                <Text style={styles.ReviewDetailsBoxTitle}>Executive Room</Text>
                <Text style={styles.ReviewDetailsText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor ini officia.
                </Text>
                <View style={styles.ReviewDetailsImagesRow}>
                  <Image source={HOTEL} style={styles.ReviewDetailsImages} />
                  <Image source={HOTEL1} style={styles.ReviewDetailsImages} />
                  <Image source={HOTEL} style={styles.ReviewDetailsImages} />
                  <Image source={HOTEL1} style={styles.ReviewDetailsImages} />
                </View>
                {/* Helpful, share button  */}
                <View style={styles.ReviewDetailsFooter}>
                  <Pressable
                    onPress={() => setIsLIke(!isLIke)}
                    style={styles.likeBtn}>
                    <Text
                      style={[
                        styles.likeBtnText,
                        {color: isLIke ? colors.primary : colors.blueDarkColor},
                      ]}>
                      Helpful
                    </Text>
                    <AntDesign
                      name={isLIke ? 'like1' : 'like2'}
                      style={[
                        styles.likeBtnIcon,
                        {color: isLIke ? colors.primary : colors.blueDarkColor},
                      ]}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => setIsPressed(!isPressed)}
                    style={styles.likeBtn}>
                    <Text
                      style={[
                        styles.likeBtnText,
                        {
                          color: isPressed
                            ? colors.primary
                            : colors.blueDarkColor,
                        },
                      ]}>
                      Share
                    </Text>
                    <Icon
                      name={
                        isPressed
                          ? 'share-social-sharp'
                          : 'share-social-outline'
                      }
                      style={[
                        styles.likeBtnIcon,
                        {
                          color: isPressed
                            ? colors.primary
                            : colors.blueDarkColor,
                        },
                      ]}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={styles.devider} />
            <View style={styles.reviewBody}>
              <View style={styles.reviewBodyHead}>
                <View style={styles.UserINfoBox}>
                  <Image source={USER3} style={styles.UserImage} />
                  <View style={styles.UserINfo}>
                    <Text style={styles.UserName}>Esther Howard</Text>
                    <View style={styles.UserPostDateBox}>
                      <Text style={styles.UserDate}>Friend</Text>
                      <View style={styles.Dot} />
                      <Text style={styles.UserDate}>23 April, 2024</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.ReviewStarBox}>
                  <Text style={styles.ReviewStarText}>4.5</Text>
                  <Icon name="star" style={styles.ReviewStar} />
                </View>
              </View>
              <View style={styles.ReviewDetailsBox}>
                <Text style={styles.ReviewDetailsBoxTitle}>Executive Room</Text>
                <Text style={styles.ReviewDetailsText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor ini officia.
                </Text>
                <View style={styles.ReviewDetailsImagesRow}>
                  <Image source={HOTEL} style={styles.ReviewDetailsImages} />
                  <Image source={HOTEL1} style={styles.ReviewDetailsImages} />
                  <Image source={HOTEL} style={styles.ReviewDetailsImages} />
                  <Image source={HOTEL1} style={styles.ReviewDetailsImages} />
                </View>
                {/* Helpful, share button  */}
                <View style={styles.ReviewDetailsFooter}>
                  <Pressable
                    onPress={() => setIsLIke(!isLIke)}
                    style={styles.likeBtn}>
                    <Text
                      style={[
                        styles.likeBtnText,
                        {color: isLIke ? colors.primary : colors.blueDarkColor},
                      ]}>
                      Helpful
                    </Text>
                    <AntDesign
                      name={isLIke ? 'like1' : 'like2'}
                      style={[
                        styles.likeBtnIcon,
                        {color: isLIke ? colors.primary : colors.blueDarkColor},
                      ]}
                    />
                  </Pressable>
                  <Pressable
                    onPress={() => setIsPressed(!isPressed)}
                    style={styles.likeBtn}>
                    <Text
                      style={[
                        styles.likeBtnText,
                        {
                          color: isPressed
                            ? colors.primary
                            : colors.blueDarkColor,
                        },
                      ]}>
                      Share
                    </Text>
                    <Icon
                      name={
                        isPressed
                          ? 'share-social-sharp'
                          : 'share-social-outline'
                      }
                      style={[
                        styles.likeBtnIcon,
                        {
                          color: isPressed
                            ? colors.primary
                            : colors.blueDarkColor,
                        },
                      ]}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
