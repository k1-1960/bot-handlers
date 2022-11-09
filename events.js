const fs = require('fs');
const path = require('path');
const root = process.cwd();

module.exports = (client, pathto) => {
  console.log('[Event Handler]', 'Cargando eventos...');
  fs.readdirSync(path.join(root, pathto))
  .forEach((folder) => {
    const events = fs.readdirSync(path.join(path.join(root, pathto), folder))
    .filter((f) => f.endsWith('.js'));

    events.forEach((filename) => {
      const event = require(path.join(path.join(path.join(root, pathto), folder), filename));

      client.on(event.name, (...args) => event.run(client, ...args));
    });
  });

  console.log('[Event Handler]', 'Eventos cargados.');
};