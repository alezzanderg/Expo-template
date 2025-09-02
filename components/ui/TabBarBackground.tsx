import { Colors } from '@/constants/Colors';
import { useTheme } from '@/hooks/useTheme';
import { View } from 'react-native';

export default function ThemedTabBarBackground() {
  const { colorScheme, themeMode } = useTheme();
  const colors = Colors[colorScheme as keyof typeof Colors];
  
  // Force re-render with key
  const backgroundKey = `tabbar-bg-${colorScheme}-${themeMode}`;
  
  return (
    <View 
      key={backgroundKey}
      style={{ 
        backgroundColor: colors.background,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }} 
    />
  );
}

export function useBottomTabOverflow() {
  return 0;
}
