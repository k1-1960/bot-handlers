# bot-handlers
instalación.
```
$ npm install bot-handlers
```

## Estructura de los handlers.
Los handlers usan subcarpetas, por lo que tus comandos y eventos deben ir clasificados en subcarpetas.

```
Bot/

— Comandos/

— — Util/

— — — ping.js

— — — clear.js

— — Moderacion/

— — — ban.js

— — — kick.js

— Eventos/

— — Client/

— — — ready.js

— — Guild/

— — — guildMemberAdd.js

— — — guildMemberRemove.js
```

representación en imagen.
<img alt="Img representación de handlers" src="https://i.imgur.com/SoVlbLm.jpg" width="75%">

### ejemplo `index.js`.
```js
const Discord = require('discord.js');
const handlers = require('bot-handlers');

const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMembers
  ]
});

client.commands = new Discord.Collection();

handlers.commands(client.commands, 'commands');
handlers.events(client, 'events');

client.login('TOKEN AQUÍ');
```

### Estructura para comandos.
```js
module.exports = {
  name: "ping",
  alias: ['p'],
  async run (client, message, args) {
    message.reply("Pong!");
  }
}
```

### Estructura para eventos.
```js
module.exports = {
  name: 'ready',
  async run (client) {
    console.log(client.user.tag, 'esta list@!');
  }
}
```