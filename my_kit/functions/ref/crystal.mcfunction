summon ender_crystal compressed_crystal
scoreboard players remove @s _crystal_tmp 1
execute if score @s _crystal_tmp matches 2.. run function ref/crystal
