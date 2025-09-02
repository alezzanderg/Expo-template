# React Native Template

A modern, feature-rich React Native template with Expo Router, TypeScript, and best practices built-in.

## ✨ Features

- **🔄 Expo Router** - File-based routing with TypeScript support
- **🌙 Dark/Light Theme** - Automatic theme switching with persistence
- **🔐 Authentication Flow** - Complete auth system (login, signup, forgot password)
- **🎨 Modern UI** - Beautiful, responsive design with themed components
- **⚡ Performance** - Optimized with React Native best practices
- **📱 Cross-Platform** - iOS, Android, and Web support
- **🔧 TypeScript** - Full type safety throughout the app
- **📦 Easy Setup** - Minimal configuration required

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)

### Installation

1. **Clone or download this template**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Run on your device:**
   - Scan the QR code with Expo Go app
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## 🎨 Customization

### 1. App Configuration

Edit `constants/AppConfig.ts` to customize your app:

```typescript
export const AppConfig = {
  // App Information
  appName: 'Your App Name',
  appDescription: 'Your app description',
  
  // Brand Colors
  brandColors: {
    primary: '#007AFF',    // Your primary color
    secondary: '#5856D6',  // Your secondary color
    accent: '#FF9500',      // Your accent color
  },
  
  // Features
  features: {
    authentication: true,   // Enable/disable auth
    darkMode: true,         // Enable/disable themes
    splashScreen: true,     // Enable/disable splash
    onboarding: true,      // Enable/disable welcome screen
  },
  
  // Content
  content: {
    welcomeFeatures: [
      'Feature 1',
      'Feature 2', 
      'Feature 3',
    ],
    welcomeSubtitle: 'Your app description',
  },
};
```

### 2. App Metadata

Update `app.json` with your app information:

```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug",
    "scheme": "yourapp",
    "ios": {
      "bundleIdentifier": "com.yourcompany.yourapp"
    },
    "android": {
      "package": "com.yourcompany.yourapp"
    }
  }
}
```

### 3. Assets

Replace the following files in `assets/images/`:
- `icon.png` - App icon (1024x1024)
- `splash-icon.png` - Splash screen icon (200x200)
- `adaptive-icon.png` - Android adaptive icon
- `favicon.png` - Web favicon

### 4. Colors & Themes

Customize colors in `constants/Colors.ts` or use the brand colors from `AppConfig.ts`.

## 📁 Project Structure

```
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation
│   ├── auth/              # Authentication pages
│   ├── welcome.tsx        # Welcome/onboarding
│   └── _layout.tsx       # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components
│   └── themed/           # Theme-aware components
├── constants/             # App configuration
├── hooks/                # Custom React hooks
├── assets/               # Images, fonts, etc.
└── README.md             # This file
```

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS  
- `npm run web` - Run on web
- `npm run reset-project` - Reset to clean template

## 🎯 Key Components

### Theme System
- `useTheme()` hook with Zustand state management
- Automatic system theme detection
- Persistent theme preferences
- Themed components (`ThemedText`, `ThemedView`, etc.)

### Authentication
- Complete auth flow (login, signup, forgot password)
- Form validation
- Loading states
- Error handling
- Skip option for demo

### Navigation
- File-based routing with Expo Router
- Tab navigation
- Stack navigation for auth flow
- Type-safe navigation

## 🚀 Deployment

### Expo Application Services (EAS)

1. **Install EAS CLI:**
   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Login to Expo:**
   ```bash
   eas login
   ```

3. **Configure EAS:**
   ```bash
   eas build:configure
   ```

4. **Build for production:**
   ```bash
   eas build --platform all
   ```

### App Store / Google Play

Follow the [Expo documentation](https://docs.expo.dev/distribution/introduction/) for detailed deployment instructions.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://expo.github.io/router/)

---

**Happy coding! 🎉**
