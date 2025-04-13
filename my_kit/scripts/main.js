import { world, system, ItemStack, EquipmentSlot, GameMode } from "@minecraft/server";

const modes = [GameMode.creative, GameMode.survival, GameMode.adventure, GameMode.spectator];

let stack = [];

function sendError(message) {
    world.sendMessage(`§4Error: ${message}`);
}

function dimension2name(dimension) {
    return dimension.id;
}

world.beforeEvents.playerBreakBlock.subscribe(e => {
    const p = e.player;
    const item = p.getComponent("inventory").container.getItem(p.selectedSlotIndex);
    if (!item) { return; }
    if (item.typeId === "minecraft:wooden_axe" && item.getDynamicProperty("pointer")) {
        e.cancel = true;
        const b = e.block;
	system.run(() => {
            p.runCommandAsync(`setblock ${b.x} ${b.y} ${b.z} ${b.typeId}`);
	});
        stack.push([e.dimension, b.x, b.y, b.z]);
    }
});

world.beforeEvents.chatSend.subscribe(e => {
    let command = e.message;
    if (command[0] === "!") {
        e.cancel = true;
        if (command.slice(0, 4) === "!set") {
            const l = stack.pop();
	    system.run(() => {
                l[0].runCommand(`setblock ${l[1]} ${l[2]} ${l[3]} ${command.slice(5)}`);
	    });
        } else if (command.slice(0, 5) === "!fill") {
            const l1 = stack.pop();
            const l2 = stack.pop();
            if (l1[0].id === l2[0].id) {
		system.run(() => {
                    l1[0].runCommand(`fill ${l1[1]} ${l1[2]} ${l1[3]} ${l2[1]} ${l2[2]} ${l2[3]} ${command.slice(6)}`);
		});
            } else {
                sendError(`Thailand cannot fill a dimension.`);
            }
        } else if (command.slice(0, 6) === "!clone") {
            const l1 = stack.pop();
            const l2 = stack.pop();
            const l3 = stack.pop();
            if (l1[0].id === l2[0].id && l[0].id === l3[0].id) {
                const [minX, minY, minZ] = [Math.min(l3[1], l2[1]), Math.min(l3[2], l2[2]), Math.min(l3[3], l2[3])];
                const [maxX, maxY, maxZ] = [Math.max(l3[1], l2[1]), Math.max(l3[2], l2[2]), Math.max(l3[3], l2[3])];
                const destX = l1[1] + (maxX - minX);
                const destY = l1[2];
                const destZ = l1[3] + (maxX - minX);
		system.run(() => {
                    l1[0].runCommand(`clone ${minX} ${minY} ${minZ} ${maxX} ${maxY} ${maxZ} ${destX} ${destY} ${destZ}`);
	        });
            } else {
                sendError(`Thailand cannot clone a dimension.`);
            }
        } else if (command === "!add") {
            const l = e.sender.location;
            stack.push([e.sender.dimension, l.x, l.y, l.z]);
        } else if (command.slice(0, 3) === "!rm") {
            const index = parseInt(command.slice(4));
            delete stack[index];
        } else if (command === "!list") {
            world.sendMessage("スタックの内容:")
            for (const l of stack) {
                world.sendMessage(`${dimension2name(l[0])}: ${l[1]} ${l[2]} ${l[3]}`);
            }
            if (stack.length == 0) {
                world.sendMessage("なし");
            }
        } else if (command === "!clean") {
            try {
                while (true) { stack.pop(); }
            } catch(e) {}
        } else if (command.slice(0, 4) === "!get") {
            const p = e.sender;
            const container = p.getComponent("inventory").container;
            switch (command.slice(5)) {
                case "gun":
                    system.run(() => {
                        const item = new ItemStack("spyglass");
                        item.setDynamicProperty("gun", true);
                        item.nameTag = "銃";
                        container.addItem(item);
                    });
                    break;
                case "pointer":
                    system.run(() => {
                        const item = new ItemStack("wooden_axe");
                        item.setDynamicProperty("pointer", true);
                        item.nameTag = "ポインター";
                        container.addItem(item);
                    });
                    break;
                case "hookshot":
                    system.run(() => {
                        const item = new ItemStack("bow");
                        item.setDynamicProperty("hookshot", true);
                        item.nameTag = "フックショット";
                        container.addItem(item);
                    });
                    break;
                case "mode":
                    system.run(() => {
                        const item = new ItemStack("splash_potion");
                        item.setDynamicProperty("mode", true);
                        item.nameTag = "モード切替";
                        item.setLore([
                            "クリエイティブ<=>サバイバル<=>アドベンチャー<=>スペクテイター<=>クリエイティブ",
                            "右へは使う、左へはスニークしながら使う"
                        ]);
                        container.addItem(item);
                    });
                    break;
                default:
                    sendError(`invaild item:${command.slice(5)}`);
                    break;
            }
        } else if (command.slice(0, 4) === "!tnt") {
	    system.run(() => {
                for (let i=0; i < parseInt(command.slice(5)); i++) {
                    e.sender.runCommand(`execute at ${e.sender.name} run summon tnt`);
                }
	    });
        } else {
            sendError(`invaild command:${command}`);
        }
    }
});

world.beforeEvents.itemUse.subscribe((e) => {
    if (e.itemStack.typeId === "minecraft:splash_potion" && e.itemStack.getDynamicProperty("mode")) {
        e.cancel = true;
        const nowMode = e.source.getGameMode();
        let index = modes.indexOf(nowMode);
        if (e.source.isSneaking) { index--; } else { index++; }
        system.run(() => {
            e.source.setGameMode(modes.at(index));
        });
    }
});

world.afterEvents.itemStopUse.subscribe((e) => {
    const {source, itemStack} = e;
    if (!itemStack) { return; }
    if (itemStack.typeId === "minecraft:bow" && itemStack.getDynamicProperty("hookshot")) {
	system.run(() => {
  	    source.runCommand(`execute as @s at @s anchored eyes run event entity @e[type=arrow,c=1] my_kit:hook`);
            source.runCommand(`execute as @s at @s anchored eyes run ride @s start_riding @e[type=arrow,c=1]`);
        });
    }
});

system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        if (!player.isSneaking) continue;
        const item = player.getComponent("inventory").container.getItem(player.selectedSlotIndex);
        if (item && item.typeId === "minecraft:spyglass" && item.getDynamicProperty("gun")) {
	    system.run(() => {
                player.runCommand(`execute as ${player.name} at @s anchored eyes run function ref/gun`);
                player.runCommand(`camerashake add ${player.name} 0.5 0.05`);
	    });
        }
    }
}, 1);
