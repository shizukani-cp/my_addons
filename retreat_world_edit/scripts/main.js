import { world, system } from "@minecraft/server";

let stack = [];
// let last_place = null;

function sendError(message) {
    world.sendMessage(`§4Error: ${message}`);
}

world.beforeEvents.playerBreakBlock.subscribe(e => {
    system.run(() => {
        let p = e.player;
        if (p.dimension.runCommand(`execute as ${p.name} at @s[hasitem={item=wooden_axe,location=slot.weapon.mainhand}] run tp @s ~~~~~`).successCount === 1) {
            e.cancel = true;
            let b = e.block;
            p.dimension.runCommandAsync(`setblock ${b.x} ${b.y} ${b.z} ${b.typeId}`);
            stack.push([e.dimension, b.x, b.y, b.z]);
        }
    }
    );
});

world.beforeEvents.chatSend.subscribe(e => {
    let command = e.message;
    if (command[0] === "!") {
        e.cancel = true;
        if (command.slice(0, 4) === "!set") {
            let l = stack.pop();
            // l[0].runCommandAsync(`structure save undo ${l[1]} ${l[2]} ${l[3]} ${l[1]} ${l[2]} ${l[3]}`);
            // last_place = l;
            l[0].runCommandAsync(`setblock ${l[1]} ${l[2]} ${l[3]} ${command.slice(5)}`);
        } else if(command.slice(0, 5) === "!fill") {
            let l1 = stack.pop();
            let l2 = stack.pop();
            if (l1[0].id === l2[0].id) {
                // l1[0].runCommandAsync(`structure save undo ${l1[1]} ${l1[2]} ${l1[3]} ${l2[1]} ${l2[2]} ${l2[3]}`);
                // last_place = l1;
                l1[0].runCommandAsync(`fill ${l1[1]} ${l1[2]} ${l1[3]} ${l2[1]} ${l2[2]} ${l2[3]} ${command.slice(5)}`);
            } else {
                sendError(`Thailand cannot fill a dimension.`);
            }
        } else if(command === "!add") {
            let p = e.sender;
            let l = p.location;
            stack.push([p.dimension, l.x, l.y, l.z]);
        /* }  else if(command.slice(0, 6) === "!clone") {
            let to = stack.pop();
            let from2 = stack.pop();
            let from1 = stack.pop();
            if (from1[0].id === from2[0].id && from2[0].id == to[0].id) {
                to[0].runCommandAsync(`structure save undo ${to[1]} ${to[2]} ${to[3]} ${to[1] + (from2[1] - from1[1])} ${to[2] + (from2[2] - from1[2])} ${to[3] + (from2[3] - from1[3])}`)
                last_place = to;
                to[0].runCommandAsync(`clone ${from1[1]} ${from1[2]} ${from1[3]} ${from2[1]} ${from2[2]} ${from2[3]} ${to[1]} ${to[2]} ${to[3]}`);
            } else {
                sendError(`You cannot clone a dimension in Thailand.`);
            }
        } else if(command === "!undo") {
            last_place[0].runCommandAsync(`structure load undo ${last_place[1]} ${last_place[2]} ${last_place[3]}`); */
        } else {
            sendError(`invaild command:${command}`);
        }
    }
});