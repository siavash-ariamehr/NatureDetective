import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>🦉</Text>
        <Text style={styles.title}>NatureDetective</Text>
        <Text style={        styles.subtitle}>VEDA AI Explorer</Text>
      </View>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => {
          // وقتی دکمه زدیدید، به اینجا می‌هاید
        }}
      >
        <Text style={styles.buttonText}>Enter as Guest</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <Link href="/(auth)/parent-verify" asChild>
          <Text style={styles.linkText}>I am a Parent</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 72,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
  subtitle: {
    fontSize: 16,
    color: '#4CAF50',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#2E7D32',
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 12,
    marginBottom: 24,
    width: '80%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  registerText: {
    color: '#666666',
    marginBottom: 4,
    textAlign: 'center',
  },
  linkText: {
    color: '#1976D2',
    fontWeight: '600',
  },
});