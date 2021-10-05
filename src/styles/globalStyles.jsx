import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`



:root {

  --brown: #4A403A;
  --clay: #A45D5D;
  --sand: #FFC069;
  --stone: #EFEFEF;
  --black: #0f0d0c;
  --beige: #DBD0C0;
  --tan: #FAEEE0;
  --tanDarker: #F9E4C8;

  // Font Sizes
  --h1: 6.4rem;
  --h2: 4.8rem;
  --h3: 3.2rem;
  --h4: 2.4rem;
  --h5: 1.8rem;
  --h6: 1.6rem;
  --p: 1.6rem;

  --largestResponsiveHeading: clamp(3.6rem, calc(14.4 / 123 * 100vw), 14.4rem);
  --largeResponsiveHeading: clamp(3.6rem, calc(12.8 / 123 * 100vw), 12.8rem);
  --mediumResponsiveHeading: clamp(3.6rem, calc(11.2 / 123 * 100vw), 11.2rem);
  --smallResponsiveHeading: clamp(3.6rem, calc(8 / 123 * 100vw), 8rem);
  --smallerResponsiveHeading: clamp(3.6rem, calc(7.2 / 123 * 100vw), 7.2rem);
  --smallestResponsiveHeading: clamp(3.6rem, calc(6.4 / 123 * 100vw), 6.4rem);

  --responsiveParagraph: clamp(1.6rem, calc(2.4 / 123 * 100vw), 2.4rem);
  --largeResponsiveParagraph: clamp(2.4rem, calc(3.6 / 123 * 100vw), 3.6rem);
  --largestResponsiveParagraph: clamp(3.6rem, calc(4.8 / 123 * 100vw), 4.8rem);

  // Fonts
  --serif: 'Playfair Display', Georgia, serif;
  --sans-serif: 'Raleway', Arial, sans-serif;

}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  line-height: 1.2;
  overflow-x: hidden;
  font-family: var(--sans-serif);
  font-weight: 400;
  font-size: 1.6rem;
}

ul {
  list-style: none;
  list-style-type: none;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

a,
a:active,
a:hover,
a:visited,
a:link {
  text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--serif);
  letter-spacing: 2px;
}

h1 {
  font-size: var(--largestResponsiveParagraph);
}
h2 {
  font-size: var(--largestResponsiveParagraph);
}
h3 {
  font-size: var(--largestResponsiveParagraph);
}
h4 {
  font-size: var(--largeResponsiveParagraph);
}
h5 {
  font-size: var(--largeResponsiveParagraph);
}
h6 {
  font-size: var(--largeResponsiveParagraph);
}

p, li {
  letter-spacing: 1px;
  font-family: var(--sans-serif);
}

p {
  font-size: var(--responsiveParagraph);
}

li {
  font-size: var(--responsiveParagraph);
}
`;

export default GlobalStyle;
