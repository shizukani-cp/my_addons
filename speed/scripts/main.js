import { world, system } from "@minecraft/server";

function getScoreboardObjective(name, display) {
    try {
        return world.scoreboard.addObjective(name, display);
    } catch(e) {
        return world.scoreboard.getObjective(name);
    }
}

function getScore(objective, p) {
    try {
        return objective.getScore(p);
    } catch(e) {
        return 0
    }
}

const x_score = getScoreboardObjective("x");
const y_score = getScoreboardObjective("y");
const z_score = getScoreboardObjective("z");
const speed_score = getScoreboardObjective("speed", "速さ(m/tick)");

system.runInterval(() => {
    for (const p of world.getAllPlayers()) {
        const prev_x = getScore(x_score, p);
        const prev_y = getScore(y_score, p);
        const prev_z = getScore(z_score, p);
        const l = p.location;
        const distance_traveled = Math.sqrt(Math.abs(prev_x - l.x) ** 2 + Math.abs(prev_y - l.y) ** 2 + Math.abs(prev_z - l.z) ** 2);
        speed_score.setScore(p, distance_traveled);
        x_score.setScore(p, l.x);
        y_score.setScore(p, l.y);
        z_score.setScore(p, l.z);
    }
}, 1);
