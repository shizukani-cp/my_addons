import { world, system } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((e) => {
  const id = e.id;
  if (id.startsWith("chunk")) {
    if (id === "chunk:wood") {
      const p = e.sourceEntity;
      const l = p.location;
      const start_x = l.x - l.x % 16;
      const start_z = l.z - l.z % 16;
      for (let i = -60; i < 311; i += 10) {
        p.runCommandAsync(`fill ${start_x} ${i} ${start_z} ${start_x + 16} ${i} ${start_z + 16} oak_planks`);
        p.runCommandAsync(`setblock ${start_x + 8} ${i} ${start_z + 8} glowstone`);
        p.runCommandAsync(`setblock ${start_x} ${i + 5} ${start_z} glowstone`);
      }
      p.runCommandAsync(`fill ${start_x} -63 ${start_z} ${start_x} 318 ${start_z} oak_log`);
    }
  }
});
