import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/hooks/useTheme';
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingsScreen() {
  const { colorScheme, themeMode, setThemeMode, resetTheme, isDark } = useTheme();
  const colors = Colors[colorScheme as keyof typeof Colors];

  const themeOptions = [
    { label: 'Light', value: 'light' as const },
    { label: 'Dark', value: 'dark' as const },
    { label: 'System', value: 'system' as const },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { borderBottomColor: colors.icon + '20' }]}>
        <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Appearance</Text>
        
        <View style={[styles.settingItem, { borderBottomColor: colors.icon + '20' }]}>
          <View style={styles.settingInfo}>
            <IconSymbol 
              size={24} 
              name="paintbrush.fill" 
              color={colors.icon} 
            />
            <Text style={[styles.settingLabel, { color: colors.text }]}>Theme</Text>
          </View>
          <Text style={[styles.settingValue, { color: colors.icon }]}>
            {themeOptions.find(option => option.value === themeMode)?.label}
          </Text>
        </View>

        <View style={styles.themeOptions}>
          {themeOptions.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={[
                styles.themeOption,
                { borderColor: colors.icon + '20' },
                themeMode === option.value && { backgroundColor: colors.tint + '20' }
              ]}
              onPress={() => setThemeMode(option.value)}
            >
              <Text style={[
                styles.themeOptionText,
                { color: themeMode === option.value ? colors.tint : colors.text }
              ]}>
                {option.label}
              </Text>
              {themeMode === option.value && (
                <IconSymbol 
                  size={16} 
                  name="checkmark.circle.fill" 
                  color={colors.tint} 
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>About</Text>
        
        <View style={[styles.settingItem, { borderBottomColor: colors.icon + '20' }]}>
          <View style={styles.settingInfo}>
            <IconSymbol 
              size={24} 
              name="info.circle.fill" 
              color={colors.icon} 
            />
            <Text style={[styles.settingLabel, { color: colors.text }]}>Version</Text>
          </View>
          <Text style={[styles.settingValue, { color: colors.icon }]}>1.0.0</Text>
        </View>
        
        <TouchableOpacity
          style={[styles.settingItem, { borderBottomColor: colors.icon + '20' }]}
          onPress={resetTheme}
        >
          <View style={styles.settingInfo}>
            <IconSymbol 
              size={24} 
              name="arrow.clockwise" 
              color={colors.icon} 
            />
            <Text style={[styles.settingLabel, { color: colors.text }]}>Reset Theme</Text>
          </View>
          <Text style={[styles.settingValue, { color: colors.icon }]}>System</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.settingItem, { borderBottomColor: colors.icon + '20' }]}
          onPress={() => {
            // Force refresh by setting to light mode first, then system
            setThemeMode('light');
            setTimeout(() => setThemeMode('system'), 100);
          }}
        >
          <View style={styles.settingInfo}>
            <IconSymbol 
              size={24} 
              name="arrow.clockwise" 
              color={colors.icon} 
            />
            <Text style={[styles.settingLabel, { color: colors.text }]}>Force Refresh</Text>
          </View>
          <Text style={[styles.settingValue, { color: colors.icon }]}>Clear Cache</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.settingItem, { borderBottomColor: colors.icon + '20' }]}
          onPress={() => {
            // Navigate back to auth flow for testing
            router.replace('/welcome');
          }}
        >
          <View style={styles.settingInfo}>
            <IconSymbol 
              size={24} 
              name="rectangle.portrait.and.arrow.right" 
              color={colors.icon} 
            />
            <Text style={[styles.settingLabel, { color: colors.text }]}>Logout</Text>
          </View>
          <Text style={[styles.settingValue, { color: colors.icon }]}>Test Auth</Text>
        </TouchableOpacity>
      </View>

      {/* Debug Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Debug Info</Text>
        
        <View style={[styles.settingItem, { borderBottomColor: colors.icon + '20' }]}>
          <View style={styles.settingInfo}>
            <IconSymbol 
              size={24} 
              name="info.circle.fill" 
              color={colors.icon} 
            />
            <Text style={[styles.settingLabel, { color: colors.text }]}>Theme Mode</Text>
          </View>
          <Text style={[styles.settingValue, { color: colors.icon }]}>{themeMode}</Text>
        </View>
        
        <View style={[styles.settingItem, { borderBottomColor: colors.icon + '20' }]}>
          <View style={styles.settingInfo}>
            <IconSymbol 
              size={24} 
              name="info.circle.fill" 
              color={colors.icon} 
            />
            <Text style={[styles.settingLabel, { color: colors.text }]}>Color Scheme</Text>
          </View>
          <Text style={[styles.settingValue, { color: colors.icon }]}>{colorScheme}</Text>
        </View>
        
        <View style={[styles.settingItem, { borderBottomColor: colors.icon + '20' }]}>
          <View style={styles.settingInfo}>
            <IconSymbol 
              size={24} 
              name="info.circle.fill" 
              color={colors.icon} 
            />
            <Text style={[styles.settingLabel, { color: colors.text }]}>Is Dark</Text>
          </View>
          <Text style={[styles.settingValue, { color: colors.icon }]}>{isDark ? 'Yes' : 'No'}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  settingValue: {
    fontSize: 14,
  },
  themeOptions: {
    marginTop: 16,
    gap: 8,
  },
  themeOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
  },
  themeOptionText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
