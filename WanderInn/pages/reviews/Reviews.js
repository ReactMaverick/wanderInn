import { View, Text, ScrollView, Pressable, FlatList, } from 'react-native';
import { styles } from './Style';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { colors } from '@/constants/colors';
import { deviceHeight } from '@/constants/constants';

export default function ReviewsPage() {

    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.screenBg,
            height: deviceHeight,
        }}>
            <View style={styles.BackHeader}>
                <View style={styles.BackHeaderInner}>
                    <View style={styles.backHeaderBtn}>
                        <Pressable style={styles.backBtn}
                            onPress={() => {
                                console.log('back');
                            }}>
                            <Ionicons name="chevron-back" style={styles.backBtnIcon} />
                        </Pressable>
                    </View>

                    <View style={styles.backHeaderTitle}>
                        <Text style={styles.HeaderTitle}>Review & Ratings</Text>
                    </View>
                    <View style={{ flex: 1 }} />
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
                                            height={deviceHeight / 80 - 5}  // Height of the progress bar
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
                                            height={deviceHeight / 80 - 5}  // Height of the progress bar
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
                                            height={deviceHeight / 80 - 5}  // Height of the progress bar
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
                                            height={deviceHeight / 80 - 5}  // Height of the progress bar
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
                                            height={deviceHeight / 80 - 5}  // Height of the progress bar
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
                    data={[
                        { key: '1', title: 'All Reviews' },
                        { key: '2', title: 'Excellent' },
                        { key: '3', title: 'Very Good' },
                        { key: '4', title: 'Good' },
                        { key: '5', title: 'Average' },
                        { key: '6', title: 'Poor' },
                    ]}
                    renderItem={({ item }) => <View style={styles.ReviewCatagoryBox}>
                        <Text style={styles.ReviewCatagoryBoxTitle}>{item.title}</Text>
                    </View>}


                />


            </ScrollView>
        </View>
    );
}