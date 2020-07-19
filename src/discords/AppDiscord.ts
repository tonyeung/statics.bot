import * as Path from "path";
import { CommandNotFound, Discord, CommandMessage, On, ArgsOf } from "@typeit/discord";

@Discord("!", {
    import: [
        Path.join(__dirname, "..", "commands", "*.js")
    ]
})
export class AppDiscord {

    @On("ready")
    onReady(): void {
        console.log("ready");
    }

    @On("message")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onMessage([message]: ArgsOf<"message">): void {
        console.log("message received");
        console.log(message.content);
    }

    @On("error")
    onError([message]: ArgsOf<"message">): void {
        console.log("error");
        console.log(message);
    }

    @On("warn")
    onWarn([message]: ArgsOf<"message">): void {
        console.log("warn");
        console.log(message);
    }

    @CommandNotFound()
    notFoundA(command: CommandMessage): void {
        command.reply("Command not found");
    }
}