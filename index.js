const Pageres = require('pageres');

const pages = require('./config/pages.json');

require('events').EventEmitter.defaultMaxListeners = 25;

const date = new Date();
const dateFormat = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getDate()}/${date.toLocaleTimeString('es-ES', {hour12: false})}`;

const base = 'https://nueva.afpmodelo.cl';
const dir = `screenshots/${base.split('//')[1]}/${dateFormat}`;

const res = ['360x740', '1280x1024'];
const delay = 2;

pages.forEach((e) => {
  (async () => {
    console.log(`Comenzando ${e.name}`);
    await new Pageres(
      {
        delay: delay,
        filename: `${e.name}-<%= size %>`,
        format: 'jpg',
      }
    )
      .src(`${base}${e.url}`, res)
      .dest(dir)
      .run();
  
    console.log(`Terminado ${e.name}`);
  })();
});
