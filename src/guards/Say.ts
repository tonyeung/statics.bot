import { ArgsOf, GuardFunction } from "@typeit/discord";


export const Say = (text: string): GuardFunction => {
  const guard: GuardFunction = async ([message]: ArgsOf<"commandMessage">, client, next) => {
    console.log("inside say");
    console.log(message.prefix, text);
    await next();
  };

  return guard;
};

