//eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";
//not sure if we have to import it or not, so we added eslint disable

declare module "@mui/material/styles/createPalette" {
  //PaletteColor only has light,main,dark and contrast text. So we added this to the interface
  interface PaletteColor {
    [key: number]: string;
  }
  //In palette interface, we don't have tertiary, so we extended it.
  interface Palette {
    tertiary: PaletteColor;
  }
}
