import { world, system } from "@minecraft/server";

const minecart_id_objective = (() => {
    try {
        return world.scoreboard.addObjective("minecart_id");
    } catch(e) {
        return world.scoreboard.getObjective("minecart_id");
    }
})();

system.runInterval(() => {
    for (const minecart_entity of world.getDimension("overworld").getEntities({type:"high_speed_minecart:minecart"})) {
        const id = (() => {
            try {
                return minecart_id_objective.getScore(minecart_entity);
            } catch(e) {
                let loc = minecart_entity.location;
                loc.y += 2.8;
                const id = Math.floor(Math.random() * (2 ** 31));
                minecart_id_objective.setScore(minecart_entity.dimension.spawnEntity("minecraft:minecart", loc), id);
                minecart_id_objective.setScore(minecart_entity, id);
                return id;
            }
        })();
        minecart_entity.dimension.runCommandAsync(`ride @e[type=minecraft:minecart,scores={minecart_id=${id}}] start_riding @e[type=high_speed_minecart:minecart,scores={minecart_id=${id}}] teleport_rider`);
    }
}, 1)