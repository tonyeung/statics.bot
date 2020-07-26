import { Command, CommandMessage, Guard } from "@typeit/discord";
import { Throttle } from "../guards/Throttle";

export abstract class Foo {
    @Command("foo")
    @Guard(Throttle("foo"))
    async foo(command: CommandMessage): Promise<void> {
        command.reply("Bar!");
    }
}