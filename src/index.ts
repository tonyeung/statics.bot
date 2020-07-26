// Starts discords/DiscordApp.ts
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config(); // Recommended way of loading dotenv
import { Client } from "@typeit/discord";

export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static start() : void {
    this._client = new Client();

    // In the login method, you must specify the glob string to load your classes (for the framework).
    // In this case that's not necessary because the entry point of your application is this file.
    this._client.login(
      process.env.TOKEN,
      `${__dirname}/discords/*.js` // If you compile your bot, the file extension will be .js
    );
    console.log("started client");
    console.log("commands"); 
    console.log(Client.getCommands());
  }
}

process.env.commands = "";

Main.start();