execute as @a[hasitem={item=ender_pearl,location=slot.weapon.mainhand,data=3}] at @s if entity @s[y=~1.4,dy=0] unless entity @s[y=~1.6,dy=0] anchored eyes run function ref/teleport
