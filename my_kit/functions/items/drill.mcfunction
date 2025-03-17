execute as @a[hasitem={item=hopper_minecart,location=slot.weapon.mainhand,data=1}] at @s if entity @s[y=~1.4,dy=0] unless entity @s[y=~1.6,dy=0] run summon hopper_minecart drill
tag @e[type=hopper_minecart,name=drill] add drill

execute at @e[tag=drill] run fill ~-1 ~-1 ~-1 ~1 ~-1 ~1 air destroy
execute at @e[tag=drill] run particle minecraft:basic_flame_particle
execute as @e[tag=drill] at @s run tp @e[type=item,r=2] @s
execute at @e[tag=drill] if block ~~~ bedrock run function ref/onbedrockdrill