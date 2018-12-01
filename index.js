const alfy = require('alfy');

const items = [];
const base = alfy.config.get('base') ? alfy.config.get('base') : 16;
const { input } = alfy;

if (Number.isInteger(parseInt(input))) {
  const rem = alfy.input / base;
  items.push({ 
      title: `${rem}rem`,
      subtitle: `${base}px as base.`,
      arg: `${rem}rem`,
      text: {
        copy: `${rem}rem`,
      }
    }
  )
} else {
  items.push({
    title: 'Numbers only please.'
  })
}
alfy.output(items);