import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-ui-lib';

export const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: Colors.dark10,
    marginBottom: 20
  },
  logoContainer: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40
  },
  logo: {
    flex: 1,
    width: 200
  },
  logoText: {
    flex: 1,
    width: '80%'
  },
  textField: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    lineHeight: 20,
    fontSize: 20,
    height: 30
  },
  floatingPlaceholder: { fontSize: 20, lineHeight: 20, marginBottom: 10, color: 'gray' }
});
