// styled.d.ts

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    font: {
      family: string;
      colors: {
        white: string;
        grey600: string;
        grey700: string;
        blue500: string;
        blue400: string;
      };
    };

    colors: {
      white: string;
      grey100: string;
      grey300: string;
      grey600: string;
      blue200: string;
      blue300: string;
      blue400: string;
      blue500: string;
      red300: string;
      purple400: string;
      yellow500: string;
      green200: string;
    };
  }
}
