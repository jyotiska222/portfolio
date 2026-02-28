// Theme configuration objects for color schemes
export const themeConfig = {
  light: {
    primary: '#2563EB',
    secondary: '#059669',
    accent: '#7C3AED',
    background: '#FFFFFF',
    surface: '#F0F4F8',
    surfaceElevated: '#FFFFFF',
    text: '#111827',
    textSecondary: '#4B5563',
    textMuted: '#6B7280',
    border: '#D1D5DB',
    borderLight: '#E5E7EB',
    success: '#059669',
    warning: '#D97706',
    error: '#DC2626',
    info: '#2563EB'
  },
  dark: {
    primary: '#60A5FA',
    secondary: '#34D399',
    accent: '#A78BFA',
    background: '#0F172A',
    surface: '#1E293B',
    surfaceElevated: '#334155',
    text: '#F1F5F9',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
    border: '#334155',
    borderLight: '#475569',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    info: '#60A5FA'
  }
};

// CSS custom properties mapping
export const getCSSVariables = (theme) => {
  const colors = themeConfig[theme];
  const cssVars = {};
  
  Object.entries(colors).forEach(([key, value]) => {
    cssVars[`--color-${key}`] = value;
  });
  
  return cssVars;
};

// Utility function to get theme colors
export const getThemeColors = (theme) => themeConfig[theme];