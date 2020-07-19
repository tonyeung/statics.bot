import { Command, CommandMessage } from "@typeit/discord";

export abstract class Ping {
    @Command("ping")
    async ping(command: CommandMessage): Promise<void> {
        console.log("!ping called");
        command.reply("Pong!");
    }
}