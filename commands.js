const fs = require('fs');
const path = require('path');
const root = process.cwd();

module.exports = (collection, pathto) => {
  console.log('[Command Handler]', 'Cargando comandos...');
  fs.readdirSync(path.join(root, pathto))
  .forEach((folder) => {
    const commands = fs.readdirSync(path.join(path.join(root, pathto), folder))
    .filter((f) => f.endsWith('.js'));

    commands.forEach((filename) => {
      const command = require(path.join(path.join(path.join(root, pathto), folder), filename));

      command.category = folder;

      collection.set(command.name, command);
    });
  });

  console.log('[Command Handler]', `${collection.size}`, 'Comandos cargados.');
};