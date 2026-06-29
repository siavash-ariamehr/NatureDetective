import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>👋 سلام!</Text>
          <Text style={styles.headerTitle}>کشف می‌کند به اینجا</Text>
        </View>

        {/* Mock Discovery Card */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View style={cardStyles.badge}>
              <Text style={cardStyles.badgeText}>98%</Text>
            </View>
            <Text style={styles.cardTitle}>بلوط‌کلاو嫌弃‌ها</Text>
          </View>
          <Text style={cardStyles.scientificName}>Quercus robur</Text>
          <Text style={cardStyles.commonName}>بلوطشکل فنلاندی</Text>
          <Text style={cardStyles.description}>این درختارین جنگل‌های فنلاندی است و در سراسراس لوکیشن (پایتونومی) بسیار رایج است.</Text>
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.discoverButton}>
          <Text style={styles.discoverText}>🔍 Open Camera to Discover</Text>
        </TouchableOpacity>

        {/* Placeholder for future real data */}
        <Text style={styles.placeholderText}>
          (Real-time AI discoveries will appear here once backend is connected)
        </Text>
      </ScrollView>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#00000005',
    shadowOffset: { width: 0, height: 2, offset: { height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  greeting: {
    fontSize: 28,
    color: '#1F2937',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 24,
    color: '#1F2937',
    marginTop: 8,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#00000008',
    shadowOffset: { width: 0, height: 2, offset: { height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  cardStyles: {
    badge: {
      backgroundColor: '#E8F5E9',
      borderRadius: 12,
      paddingHorizontal: 12,
      paddingVertical: 6,
      marginRight: 8,
    },
    badgeText: {
      color: '#2E7D32',
      fontWeight: 'bold',
      fontSize: 14,
    },
    scientificName: {
      fontSize: 16,
    fontStyle: 'italic',
    color: '#374151',
  },
  commonName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  discoverButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 24,
    shadowColor: '#1B5E20',
    shadowOffset: { width: 0, height: 4, offset: { height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  discoverText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  placeholderText: {
    marginTop: 40,
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 14,
  },
});