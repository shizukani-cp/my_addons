import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((e) => {
    if (e.message[0] === "!") {
        e.cancel = true;
        if (e.message === "!fireworks") {
            for (let i = 0; i <= 100; i++) {
                world.getDimension("overworld").runCommandAsync("summon villager 0 100 0");
            }
            world.getDimension("overworld").createExplosion([0, 100, 0], 100);
        } else {
            world.sendMessage("It command is not exists.")
        }
    }
});