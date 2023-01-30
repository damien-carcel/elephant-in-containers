import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/league.css';
/* Code syntax highlighting */
import 'reveal.js/plugin/highlight/monokai.css';

import Reveal from 'reveal.js';
import RevealHighlight from 'reveal.js';
import RevealNotes from 'reveal.js';

const deck = new Reveal({
  plugins: [RevealHighlight, RevealNotes],
});
deck.initialize();
