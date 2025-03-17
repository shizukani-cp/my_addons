execute if block ~ ~-2 ~ magenta_glazed_terracotta ["facing_direction"=5] facing ~-10 ~ ~ run tp ^^^0.05 ~~
execute if block ~ ~-2 ~ magenta_glazed_terracotta ["facing_direction"=2] facing ~ ~ ~10 run tp ^^^0.05 ~~
execute if block ~ ~-2 ~ magenta_glazed_terracotta ["facing_direction"=3] facing ~ ~ ~-10 run tp ^^^0.05 ~~
execute if block ~ ~-2 ~ magenta_glazed_terracotta ["facing_direction"=4] facing ~10 ~ ~ run tp ^^^0.05 ~~
scoreboard players remove @s _tmp 1
execute if score @s _tmp matches 1.. run function ref/moving