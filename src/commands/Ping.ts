import { Command, CommandMessage, Guard } from "@typeit/discord";
import { Throttle } from "../guards/Throttle";

export abstract class Ping {
    @Command("ping")
    @Guard(Throttle("ping"))
    async ping(command: CommandMessage): Promise<void> {
        command.reply("Pong!");
    }
}