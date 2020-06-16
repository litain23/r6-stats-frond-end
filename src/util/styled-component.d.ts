

import styled, * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { R6Theme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends R6Theme {}
  const {ThemeProvider} = styledComponents as ThemedStyledComponentsModule<R6Theme>
  export {ThemeProvider}
  export default styled
}


/** 
 * 아래는 보일러 플레이트 코드입니다.
 * 삭제하지 말아주세요!
 */
// import * as styledComponents from 'styled-components';
// import { ThemedStyledComponentsModule } from 'styled-components';
// import { R6Theme } from './Theme'

// const {
//   default: styled,
//   css,
//   createGlobalStyle,
//   keyframes,
//   ThemeProvider,
// } = styledComponents as ThemedStyledComponentsModule<R6Theme>;

// export { css, createGlobalStyle, keyframes, ThemeProvider };
// export default styled;


