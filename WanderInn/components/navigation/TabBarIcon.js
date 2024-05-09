// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from './Style';

export function TabBarIcon({ style, ...rest }) {
  return <Ionicons size={28} style={[styles.icon, style]} {...rest} />;
}
