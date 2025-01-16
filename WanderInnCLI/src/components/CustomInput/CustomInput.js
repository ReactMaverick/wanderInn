import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './Style';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../constants/colors';

export default function CustomInput({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  placeholderTextColor,
  inputStyle,
  required,
  error,
  errorText,
  rightIcon,
  iconColor,
  onIconPress,
  keyboardType,
}) {
  return (
    <View>
      <Text style={styles.inputLabel}>
        {label}
        {required && <Text style={styles.requiredTextColor}> *</Text>}
      </Text>
      <View style={{position: 'relative'}}>
        <TextInput
          style={inputStyle ?? styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor ?? colors.placeholderColor}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          required={required}
          keyboardType={keyboardType ?? 'default'}
        />
        {rightIcon && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 15,
              top: 15,
            }}
            onPress={onIconPress ?? (() => {})}>
            <Icon name={rightIcon} size={20} color={iconColor ?? 'black'} />
          </TouchableOpacity>
        )}
        {error && <Text style={styles.errorText}>{errorText}</Text>}
      </View>
    </View>
  );
}
