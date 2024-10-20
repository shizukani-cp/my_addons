import { system, world, ItemStack } from "@minecraft/server";
import { ActionFormData, ModalFormData } from '@minecraft/server-ui';

const INVENTORY_SIZE = 9

function get_hotbars() {
    const dp = world.getDynamicProperty("swap_hotbar:hotbars");
    if (dp === undefined) {
        return [];
    }
    return JSON.parse(dp);
}

function save_hotbars(hotbars) {
    world.setDynamicProperty("swap_hotbar:hotbars", JSON.stringify(hotbars));
}

world.beforeEvents.itemUse.subscribe((e) => {
    if (e.itemStack.type.id !== "minecraft:paper") { return; }
    e.cancel = true;
    const p = e.source;
    const c = p.getComponent("inventory").container
    if (c === undefined) {
        p.sendMessage({
            rawtext:[{
                text:"§4エラーが発生しました"
            }]
        });
        return;
    }
    const dyn_prp = get_hotbars;

    const form = new ActionFormData()
        .button("保存")
        .button("ロード");
    system.run(() => {
        form.show(p).then((r) => {
            if (r.selection === 0) {
                const f = new ModalFormData()
                    .textField("保存するホットバーのID", "example:steve_sample")
                    .submitButton("保存");
                f.show(p).then((d) => {
                    if (d.canceled) { return; }
                    const items = []
                    for (let i = 0; i < INVENTORY_SIZE; i++) {
                        const item = c.getItem(i);
                        items.add({
                            amount:item.amount,
                            nameTag:item.nameTag,
                            id:item.type.id
                        });
                    }
                    dyn_prp[d.formValues[0]] = items;
                    save_hotbars(dyn_prp);
                });
            } else if (r.selection === 1) {
                const f = new ModalFormData()
                    .textField("ロードするホットバーのID", "example:steve_sample")
                    .submitButton("ロード");
                    f.show(p).then((d) => {
                        if (d.canceled) { return; }
                        const items = dyn_prp[d.formValues[0]];
                        for (let i = 0; i < INVENTORY_SIZE; i++) {
                            const l = items[i];
                            const item = new ItemStack(l.id, l.amount);
                            item.nameTag = l.nametag;
                            c.setItem(i, item);
                        }
                    });
            }  else if (r.canceled) {} else {
                p.sendMessage({
                    rawtext:[{
                        text:"§4エラーが発生しました"
                    }]
                });
            }
        });
    });
});
