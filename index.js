// Code your solution in this file!
function distanceFromHqInBlocks (pickup) {
    return Math.abs(pickup-42)
}

function distanceFromHqInFeet (pickup) {
    return Math.abs(pickup-42)*264
}

function distanceTravelledInFeet (startBlock, endBlock) {
    return Math.abs(endBlock-startBlock)*264
}

function calculatesFarePrice (startBlock, endBlock) {
    const feet = Math.abs(endBlock-startBlock)*264
    if (feet < 400) {
        return 0
    } else if (feet > 400 && feet < 2000) {
        return (feet-400)*0.02
    } else if (feet > 2000 && feet < 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
     
}