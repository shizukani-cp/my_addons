import { world, system, ItemStack } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

const MINECRAFT_VANILLA_RATE = {
    iron_nugget: 100,
    iron_ingot: 900,
    iron_block: 8100
};

const TAX = 0.1;

function get_money(player) {
    let money;
    try {
        money = world.scoreboard.getObjective("money").getScore(player);
    } catch(e) {
        money = 0;
    }
    return money;
}

function get_item(player) {
    const form = new ModalFormData();
    form.title("入手したいアイテムは？");
    form.textField("アイテムのID(minecraft:も含む)", "ここに入力してください。");
    form.textField("個数(半角)", "ここに入力してください。");
    form.show(player).then(response => {
        if (response.canceled) {return;}
        const [target_item_id, num_s] = response.formValues;
        let money;
        try {
            money = world.scoreboard.getObjective("money").getScore(player);
        } catch(e) {
            money = 0;
        }
        let num_n;
        num_n = parseInt(num_s);
        if (target_item_id.slice(0, 10) === "minecraft:") {
            const unit_price = MINECRAFT_VANILLA_RATE[target_item_id.slice(10)]
            if (unit_price === undefined) {return;}
            const price = unit_price * num_n * (1 + TAX);
            let money = get_money(player);
            if (money >= price) {
                player.dimension.runCommandAsync(`give ${player.name} ${target_item_id} ${num_n}`);
                money -= price;
                world.scoreboard.getObjective("money").setScore(player, money);
            }
        }
    });
};



system.runInterval(() => {
    for (let player of world.getAllPlayers()) {
        let container = player.getComponent("inventory").container;
        let slot = container.getItem(8);
        if (slot === undefined) {continue;}
        let slot_item_name = slot.typeId;
        let money = get_money(player);
        if (slot_item_name.slice(0, 10) === "minecraft:") {
            let plus_money = MINECRAFT_VANILLA_RATE[slot_item_name.slice(10)];
            if (plus_money === undefined) {continue;};
            money += plus_money;
            player.dimension.runCommandAsync(`replaceitem entity ${player.name} slot.hotbar 8 air`);
            world.scoreboard.getObjective("money").setScore(player, money);
        }
    };
}, 1);

world.afterEvents.playerJoin.subscribe((player) => {
    let paper = new ItemStack("paper");
    paper.nameTag = "交換商人との電話";
    player.getComponent("inventory").container.addItem();
})