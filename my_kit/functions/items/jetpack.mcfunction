execute as @a[hasitem={item=iron_chestplate,data=5,location=slot.armor.chest}] at @s if entity @s[y=~1.4,dy=0] unless entity @s[y=~1.6,dy=0] run effect @s levitation 1 10 true
scoreboard players add @a timer 1
execute as @a[hasitem={item=iron_chestplate,data=5,location=slot.armor.chest}] at @s if entity @s[y=~1.4,dy=0] unless entity @s[y=~1.6,dy=0] run scoreboard players set @s timer 1
scoreboard players set @a[scores={timer=5}] timer 0

effect @a[scores={timer=0}] levitation 0 255 true

execute as @a[hasitem={item=ender_pearl,location=slot.weapon.mainhand,data=1}] at @s[hasitem={item=iron_chestplate,data=5,location=slot.armor.chest}] if entity @s[y=~1.4,dy=0] unless entity @s[y=~1.6,dy=0] run tp @s ^^^1

execute as @a[hasitem={item=ender_pearl,location=slot.weapon.mainhand,data=2}] at @s[hasitem={item=iron_chestplate,data=5,location=slot.armor.chest}] if entity @s[y=~1.4,dy=0] unless entity @s[y=~1.6,dy=0] run tp @s ^^^3

execute as @a[hasitem={item=iron_chestplate,data=5,location=slot.armor.chest}] at @s if entity @s[y=~1.4,dy=0] unless entity @s[y=~1.6,dy=0] run camerashake add @s 1.0 0.1
execute as @a[hasitem={item=iron_chestplate,data=5,location=slot.armor.chest}] at @s if entity @s[y=~1.4,dy=0] unless entity @s[y=~1.6,dy=0] run particle minecraft:basic_flame_particle