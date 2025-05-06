import { typeNextLine } from './subtitleAnimation.js';

const lines = [
  "I build web ideas that time travel.",
  "I turn philosophy into UI.",
  "I create logic-driven designs."
];
const subtitle = document.getElementById("subtitle");

typeNextLine(subtitle, lines);