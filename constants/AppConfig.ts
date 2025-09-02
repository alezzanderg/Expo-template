// App Configuration - Customize these values for your specific app
export const AppConfig = {
  // App Information
  appName: 'Your App Name',
  appDescription: 'Your app description',
  appVersion: '1.0.0',
  
  // Brand Colors (will override Colors.ts theme colors)
  brandColors: {
    primary: '#007AFF', // iOS Blue
    secondary: '#5856D6', // iOS Purple
    accent: '#FF9500', // iOS Orange
  },
  
  // Features Configuration
  features: {
    authentication: true,
    darkMode: true,
    splashScreen: true,
    onboarding: true,
  },
  
  // Navigation Configuration
  navigation: {
    showWelcomeScreen: true,
    showAuthFlow: true,
    defaultTab: 'home', // 'home', 'explore', 'settings'
  },
  
  // Authentication Configuration
  auth: {
    requireEmail: true,
    requirePassword: true,
    requireName: true,
    allowSkip: true,
    socialLogin: false, // Google, Apple, etc.
  },
  
  // Content Configuration
  content: {
    welcomeFeatures: [
      'Secure authentication',
      'Dark & light themes',
      'Modern UI design',
    ],
    welcomeSubtitle: 'Your personal companion app',
  },
  
  // Development Configuration
  development: {
    enableDebugLogs: false,
    showDevMenu: true,
  },
} as const;

// Type for the config
export type AppConfigType = typeof AppConfig;
