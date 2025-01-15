import {colors} from '../../constants/colors';
import {deviceHeight, deviceWidth} from '../../constants/constants';
import {small, smallS} from '../../constants/fontConstants';
import {Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native';

export default function DropdownItem({
  items,
  item,
  index,
  select,
  usePressable,
}) {
  if (usePressable)
    return (
      <Pressable
        testID={`dropdown-item-${item.key}`}
        key={item.key}
        style={[
          style.container,
          index === 0 && style.firstItem,
          index === items.length - 1 && style.lastItem,
        ]}
        onPress={() => select(item)}>
        <Text style={style.text}>{item.value}</Text>
      </Pressable>
    );

  return (
    <TouchableOpacity
      testID={`dropdown-item-${item.key}`}
      key={item.key}
      style={[
        style.container,
        index === 0 && style.firstItem,
        index === items.length - 1 && style.lastItem,
      ]}
      onPress={() => select(item)}>
      <Text style={style.text}>{item.value}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    paddingVertical: (deviceHeight * 1) / 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderDarkColor,
  },
  text: {
    flex: 1,
    fontFamily: 'LatoRegular',
    fontSize: small,
    paddingHorizontal: 12,
    color: colors.textPrimary,
  },
  firstItem: {
    paddingBottom: 8,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
});
