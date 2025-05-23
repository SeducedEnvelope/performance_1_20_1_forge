// ------------------------------
// -----[ RECIPE CONSTANTS ]-----
// ------------------------------

// common items for some recipes
const blazePowder = 'minecraft:blaze_powder'
// reference enum with eye data
// const EYE_OF_MAGMA = global.legendaryMonstersEyes.EYE_OF_MAGMA
// const EYE_OF_SOUL = global.legendaryMonstersEyes.EYE_OF_SOUL
const EYE_OF_BONES = global.legendaryMonstersEyes.EYE_OF_BONES
const EYE_OF_AIR = global.legendaryMonstersEyes.EYE_OF_AIR
const { checkerBoardRecipeWithCenterItem } = global.itemUtils

// ---------------------------------
// -----[ PROGRESSION RECIPES ]-----
// ---------------------------------

// recipes for all the eyes (that need to be crafted)
ServerEvents.recipes(event => {
    let recipe
    recipe = { 
        output: "kubejs:keeper_key", 
        itemOne: blazePowder, 
        itemTwo: "minecraft:nether_bricks", 
        centerItem: "minecraft:nether_wart"
    }
    checkerBoardRecipeWithCenterItem({ event: event, recipe: recipe })
    recipe = { 
        output: "kubejs:ghast_key", 
        itemOne: blazePowder, 
        itemTwo: "minecraft:soul_sand", 
        centerItem: "minecraft:ghast_tear"
    }
    checkerBoardRecipeWithCenterItem({ event: event, recipe: recipe })
    event.shapeless(EYE_OF_AIR, [
            'kubejs:gravitite_gel',
            'kubejs:valkyrean_wing',
            'kubejs:solar_stone',
            'kubejs:whale_wind'
        ]
    )   
    event.shapeless(EYE_OF_BONES, [
            'kubejs:green_goo',
            'kubejs:stiff_skin',
            'kubejs:golden_egg'
        ]
    )
    recipe = { 
        output: Item.of("blue_skies:turquoise_stonebrick", 4), 
        itemOne: "minecraft:snowball", 
        itemTwo: "minecraft:brick", 
        centerItem: "blue_skies:zeal_lighter", 
        centerItemIsTool: true, 
        centerItemIsDamaged: true 
    }
    checkerBoardRecipeWithCenterItem({ event: event, recipe: recipe })
    recipe = { 
        output: Item.of("blue_skies:lunar_stonebrick", 4), 
        itemOne: "minecraft:vine", 
        itemTwo: "minecraft:brick", 
        centerItem: "blue_skies:zeal_lighter", 
        centerItemIsTool: true, 
        centerItemIsDamaged: true 
    }
    checkerBoardRecipeWithCenterItem({ event: event, recipe: recipe })
})

    







