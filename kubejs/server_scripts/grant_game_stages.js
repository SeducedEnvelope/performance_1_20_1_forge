// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts for granting advancements)')

PlayerEvents.advancement("minecraft:story/mine_stone", event => {
    // // OLD WAY (only works for one player BUT does not use built-in game commands)
    // event.player.stages.add("easy_mode")
    // event.player.tell("Game is now in Easy Mode")
    
    Utils.server.runCommandSilent(`gamestage add @a easy_mode true`)
    Utils.server.runCommand(`tellraw @a ["",{"text":"New, strange creatures are emerging...","color":"green"},{"text":" ["},{"text":"Easy Mode Unlocked","color":"aqua"},{"text":"]"}]`)
})
PlayerEvents.advancement("minecraft:nether/find_fortress", event => {
    Utils.server.runCommandSilent(`gamestage add @a medium_mode true`)
    Utils.server.runCommand(`tellraw @a ["",{"text":"The world's creatures grow stronger...","color":"green"},{"text":" ["},{"text":"Medium Mode Unlocked","color":"yellow"},{"text":"]"}]`)
})
PlayerEvents.advancement("minecraft:story/enter_the_end", event => {
    Utils.server.runCommandSilent(`gamestage add @a hard_mode true`)
    Utils.server.runCommand(`tellraw @a ["",{"text":"The creatures have evolved...","color":"green"},{"text":" ["},{"text":"Hard Mode Unlocked","color":"red"},{"text":"]"}]`)
})




