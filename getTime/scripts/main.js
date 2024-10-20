import { world, system } from "@minecraft/server";

try {
    world.scoreboard.addObjective("time")
} catch(_) {}

system.runInterval(() => {
    world.getDimension("overworld").runCommandAsync(`scoreboard players set @a time ${world.getTimeOfDay()}`)
}, 1);