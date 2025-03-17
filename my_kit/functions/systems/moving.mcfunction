scoreboard players set @e[type=minecart,scores={velocity=..0}] velocity 0
execute as @e[scores={velocity=0..}] at @a if score @s train_number = @a[c=1] train_number as @a[c=1] if entity @s[hasitem={item=red_concrete,location=slot.weapon.mainhand}] run scoreboard players reset @e[scores={velocity=0..},c=1] velocity 
execute as @e[scores={velocity=0..}] at @a if score @s train_number = @a[c=1] train_number as @a[c=1] if entity @s[hasitem={item=orange_concrete,location=slot.weapon.mainhand}] run scoreboard players remove @e[scores={velocity=0..},c=1] velocity 5
execute as @e[scores={velocity=0..}] at @a if score @s train_number = @a[c=1] train_number as @a[c=1] if entity @s[hasitem={item=lime_concrete,location=slot.weapon.mainhand}] run scoreboard players add @e[scores={velocity=0..},c=1] velocity 2
execute as @e[scores={velocity=0..}] at @a if score @s train_number = @a[c=1] train_number as @a[c=1] if entity @s[hasitem={item=green_concrete,location=slot.weapon.mainhand}] run scoreboard players add @e[scores={velocity=0..},c=1] velocity 10
tag @e[type=minecart,scores={velocity=1..}] add moving
execute as @e[tag=moving] run scoreboard players operation @s _tmp = @s velocity
execute as @e[tag=moving] at @s run function ref/moving
tag @e[tag=moving] remove moving