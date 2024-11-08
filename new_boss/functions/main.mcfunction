execute as @e[type=wither_skeleton,name=boss] unless entity @s[hasitem={item=bow,location=slot.weapon.mainhand}] run replaceitem entity @s slot.weapon.mainhand 0 bow
replaceitem entity @e[type=wither_skeleton,name=boss] slot.armor.head 0 netherite_helmet
replaceitem entity @e[type=wither_skeleton,name=boss] slot.armor.chest 0 netherite_chestplate
replaceitem entity @e[type=wither_skeleton,name=boss] slot.armor.legs 0 netherite_leggings
replaceitem entity @e[type=wither_skeleton,name=boss] slot.armor.feet 0 netherite_boots
effect @e[type=wither_skeleton,name=boss] speed 1 100
effect @e[type=wither_skeleton,name=boss] jump_boost 1 10
effect @e[type=wither_skeleton,name=boss] resistance 1 3
effect @e[type=wither_skeleton,name=boss] fire_resistance 1 0
effect @e[type=wither_skeleton,name=boss] health_boost 1 100
effect @e[type=wither_skeleton,name=boss] instant_damage 1 1
execute at @e[type=wither_skeleton,name=boss] as @e[r=10,type=!evocation_fang,type=!wither_skeleton] at @s run summon evocation_fang
