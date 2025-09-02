# Template Setup Guide

This guide will help you quickly customize this template for your new React Native project.

## 🚀 Quick Setup (5 minutes)

### 1. Update App Configuration

Edit `constants/AppConfig.ts`:

```typescript
export const AppConfig = {
  // Change these values for your app
  appName: 'My Awesome App',
  appDescription: 'A fantastic mobile application',
  appVersion: '1.0.0',
  
  // Your brand colors
  brandColors: {
    primary: '#FF6B6B',     // Your primary color
    secondary: '#4ECDC4',   // Your secondary color
    accent: '#45B7D1',      // Your accent color
  },
  
  // Enable/disable features
  features: {
    authentication: true,   // Set to false to skip auth
    darkMode: true,
    splashScreen: true,
    onboarding: true,
  },
  
  // Customize welcome screen
  content: {
    welcomeFeatures: [
      'Amazing feature 1',
      'Incredible feature 2',
      'Revolutionary feature 3',
    ],
    welcomeSubtitle: 'The best app you\'ll ever use',
  },
};
```

### 2. Update App Metadata

Edit `app.json`:

```json
{
  "expo": {
    "name": "My Awesome App",
    "slug": "my-awesome-app",
    "scheme": "myawesomeapp",
    "ios": {
      "bundleIdentifier": "com.yourcompany.myawesomeapp"
    },
    "android": {
      "package": "com.yourcompany.myawesomeapp"
    }
  }
}
```

### 3. Replace Assets

Replace these files in `assets/images/`:
- `icon.png` (1024x1024)
- `splash-icon.png` (200x200)
- `adaptive-icon.png` (1024x1024)
- `favicon.png` (48x48)

### 4. Start Development

```bash
npm install
npm start
```

## 🎨 Advanced Customization

### Custom Colors

Edit `constants/Colors.ts` for more color customization:

```typescript
export const Colors = {
  light: {
    text: '#1A1A1A',
    background: '#FFFFFF',
    tint: '#FF6B6B',        // Your primary color
    icon: '#666666',
    // ... other colors
  },
  dark: {
    text: '#FFFFFF',
    background: '#1A1A1A',
    tint: '#FF6B6B',        // Your primary color
    icon: '#CCCCCC',
    // ... other colors
  },
};
```

### Custom Navigation

Modify `app/(tabs)/_layout.tsx` to change tab structure:

```typescript
<Tabs.Screen
  name="index"
  options={{
    title: 'Home',
    tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
  }}
/>
// Add more tabs as needed
```

### Custom Authentication

Edit `app/auth/` files to customize:
- Login form fields
- Signup requirements
- Password validation
- Error messages

### Custom Components

Create new themed components in `components/`:

```typescript
import { useTheme } from '@/hooks/useTheme';
import { Colors } from '@/constants/Colors';

export function MyCustomComponent() {
  const { colorScheme } = useTheme();
  const colors = Colors[colorScheme as keyof typeof Colors];
  
  return (
    <View style={{ backgroundColor: colors.background }}>
      <Text style={{ color: colors.text }}>My Component</Text>
    </View>
  );
}
```

## 🔧 Feature Toggles

### Disable Authentication

In `constants/AppConfig.ts`:
```typescript
features: {
  authentication: false,  // This will skip auth flow
  // ... other features
}
```

### Disable Welcome Screen

In `constants/AppConfig.ts`:
```typescript
navigation: {
  showWelcomeScreen: false,  // Goes directly to main app
  // ... other settings
}
```

### Disable Dark Mode

In `constants/AppConfig.ts`:
```typescript
features: {
  darkMode: false,  // Only light mode
  // ... other features
}
```

## 📱 Platform-Specific Customization

### iOS Customization

Edit `app.json` iOS section:
```json
"ios": {
  "supportsTablet": true,
  "bundleIdentifier": "com.yourcompany.app",
  "infoPlist": {
    "CFBundleDisplayName": "Your App Name"
  }
}
```

### Android Customization

Edit `app.json` Android section:
```json
"android": {
  "package": "com.yourcompany.app",
  "adaptiveIcon": {
    "foregroundImage": "./assets/images/adaptive-icon.png",
    "backgroundColor": "#FFFFFF"
  }
}
```

## 🚀 Deployment Preparation

### 1. Update Package.json

```json
{
  "name": "my-awesome-app",
  "version": "1.0.0",
  "description": "My awesome React Native app",
  "author": "Your Name",
  "license": "MIT"
}
```

### 2. Configure EAS Build

```bash
npm install -g @expo/eas-cli
eas login
eas build:configure
```

### 3. Environment Variables

Create `.env` file for API keys:
```env
API_URL=https://your-api.com
API_KEY=your-api-key
```

## 📋 Checklist

- [ ] Updated `AppConfig.ts` with your app details
- [ ] Updated `app.json` with your app metadata
- [ ] Replaced all assets in `assets/images/`
- [ ] Tested on iOS simulator
- [ ] Tested on Android emulator
- [ ] Tested on web browser
- [ ] Verified authentication flow
- [ ] Verified theme switching
- [ ] Updated README.md
- [ ] Configured EAS build (if deploying)

## 🆘 Common Issues

### App not showing auth flow
- Check `AppConfig.features.authentication` is `true`
- Check `AppConfig.navigation.showWelcomeScreen` is `true`

### Colors not updating
- Clear app cache: `npx expo start --clear`
- Check `AppConfig.brandColors` values

### Navigation issues
- Restart development server
- Check file names match route names

### Build errors
- Run `npm install` to ensure all dependencies
- Check `app.json` syntax
- Verify asset file paths

---

**Need help?** Check the main README.md for more detailed documentation.
