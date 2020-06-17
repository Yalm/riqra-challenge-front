import Theme from '../theme/theme';

type ThemeInterface = typeof Theme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeInterface {}
}
