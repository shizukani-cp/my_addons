scoreboard players set @a craft -1
scoreboard players set @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] craft 0
replaceitem entity @a slot.enderchest 4 barrier 1 1
replaceitem entity @a slot.enderchest 13 barrier 1 1
replaceitem entity @a slot.enderchest 22 barrier 1 1
clear @a barrier 1 1
replaceitem entity @a[scores={craft=-1}] slot.enderchest 17 air
#execute as @a[hasitem={item=paper,location=slot.enderchest,slot=17,data=1}] unless entity @s[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] run  replaceitem entity @s slot.enderchest 17 air

execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8},scores={craft=!-1}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run function ref/recipies

#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=5,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=6,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=7,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=14,quantity=0}] if entity @s[hasitem={item=ender_pearl,location=slot.enderchest,slot=15,data=1}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=16,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=23,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=24,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=25,quantity=0}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run scoreboard players set @s craft 1
replaceitem entity @a[scores={craft=1}] slot.enderchest 26 ender_pearl 1 2
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=5,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=6,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=7,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=14,quantity=0}] if entity @s[hasitem={item=ender_pearl,location=slot.enderchest,slot=15,data=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=16,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=23,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=24,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=25,quantity=0}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run scoreboard players set @s craft 2
replaceitem entity @a[scores={craft=2}] slot.enderchest 26 ender_pearl 1 1
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=5,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=6,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=7,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=14,quantity=0}] if entity @s[hasitem={item=torch,location=slot.enderchest,slot=15,data=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=16,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=23,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=24,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=25,quantity=0}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run scoreboard players set @s craft 3
replaceitem entity @a[scores={craft=3}] slot.armor.head 0 torch
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=5,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=6,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=7,quantity=0}] if entity @s[hasitem={item=feather,location=slot.enderchest,slot=14,data=0}] if entity @s[hasitem={item=iron_chestplate,location=slot.enderchest,slot=15,data=0}] if entity @s[hasitem={item=feather,location=slot.enderchest,slot=16,data=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=23,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=24,quantity=0}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=25,quantity=0}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run scoreboard players set @s craft 4
replaceitem entity @a[scores={craft=4}] slot.enderchest 26 iron_chestplate 1 5
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=5}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=6}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=7}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=14}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=15}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=16}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=23}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=24}] if entity @s[hasitem={item=nether_star,location=slot.enderchest,slot=25}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run scoreboard players set @s craft 5
replaceitem entity @a[scores={craft=5}] slot.enderchest 26 poisonous_potato
replaceitem entity @a[scores={craft=6}] slot.enderchest 26 ender_pearl 1 3
replaceitem entity @a[scores={craft=7}] slot.enderchest 26 gold_nugget 1 1
replaceitem entity @a[scores={craft=8}] slot.enderchest 26 spyglass 1 1

execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 5 air
execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 6 air
execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 7 air
execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 14 air
execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 15 air
execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 16 air
execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 23 air
execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 24 air
execute as @a[scores={craft=1..}] run replaceitem entity @s slot.enderchest 25 air

#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 5 air
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 6 air
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 7 air
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 12 air
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 13 air
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 14 air
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 23 air
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 24 air
#execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 25 air

execute as @a[hasitem={item=crafting_table,location=slot.enderchest,slot=8}] unless entity @s[hasitem={item=paper,location=slot.enderchest,slot=17}] run  replaceitem entity @s slot.enderchest 17 paper 1 1
clear @a paper 1 1
scoreboard players set @a craft 0