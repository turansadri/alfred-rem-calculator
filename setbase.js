const alfy = require('alfy');

const oldBase = alfy.config.get('base');
const { input } = alfy;
const base = isNaN(input) ? oldBase : parseInt(input);

alfy.config.set('base', base);

items = [
  {
    title: `${base}px set as base.`,
    arg: `${base}px`,
  }
];
alfy.output(items);