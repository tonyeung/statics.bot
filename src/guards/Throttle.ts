import { ArgsOf, GuardFunction } from "@typeit/discord";


export const Throttle = (commandName: string): GuardFunction => {    
    const guard: GuardFunction = async ([message]: ArgsOf<"commandMessage">, client, next) => {
        console.log("inside throttle, called " + commandName);
        console.log("commands called: " + process.env.commands);

        if (process.env.commands.indexOf(commandName) == -1) {
            console.log(commandName + " not found");
            process.env.commands += commandName;
            await next();
        }
        else {
            console.log(commandName + " found");
            message.reply("already executed command");
        }        
    };

    return guard;
};

