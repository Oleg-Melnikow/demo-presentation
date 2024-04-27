import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import 'reveal.js/dist/reveal.css';
// see available themes in the
// node_modules/reveal.js/dist/theme
//  beige, black, blood, league, moon, night, serif, simple, ...
// import ComparisonSlider from "comparison-slider";
import 'reveal.js/dist/theme/moon.css';

const deck = new Reveal();
deck.initialize({
  hash: true,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes, RevealZoom],
});
