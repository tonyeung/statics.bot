import { Command, CommandMessage, Guard } from "@typeit/discord";
import { Say } from "../guards/Say";

export abstract class Ping {
    @Command("ping")
    @Guard(Say("guard"))
    async ping(command: CommandMessage): Promise<void> {
        console.log("!ping called with guard");
        command.reply("Pong!");
    }
}