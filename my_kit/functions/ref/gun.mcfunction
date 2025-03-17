particle minecraft:basic_flame_particle
tag @e[x=~-0.95,y=~-0.95,z=~-0.95,dx=0] add damage
execute as @e[x=~-0.05,y=~-0.05,z=~-0.05,dx=0] run tag @s remove damage
tag @s remove damage
tag @e[type=item] remove damage
tag @e[type=xp_orb] remove damage
damage @e[tag=damage] 50 entity_attack entity @s
execute unless entity @e[tag=damage] positioned ^ ^ ^1 if block ^^^ air run function ref/gun
execute unless entity @e[tag=damage] positioned ^ ^ ^1 if block ^^^ tallgrass run function ref/gun
execute unless entity @e[tag=damage] positioned ^ ^ ^1 if block ^^^ double_plant run function ref/gun
execute unless entity @e[tag=damage] positioned ^ ^ ^1 if block ^^^ snow_layer run function ref/gun
tag @e remove damage
