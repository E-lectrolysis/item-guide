/**
 * @author Electrolysis
 * 
 */

let allItems = require('./public_api.json');

function searchItem(params) {
    console.log(params);
    if(params === undefined) {
        return allItems;
    }

    let items;

    if(params.min === undefined) {
        params.min = 0;
    }
    if(params.max === undefined) {
        params.max = 150;
    }

    if(params.name === undefined || params.name  === null || params.name === '') {
        items = allItems.items;
    } else {
        items = allItems.items.filter(x => x.name.toLowerCase().includes(params.name.toLowerCase()));
    }
    items = levelFilter(params.min, params.max, items);
    if(params.sortBy !== "level" && params.sortBy !== undefined) {
        items = items.filter(x => x[params.sortBy] !== undefined && x[params.sortBy] != 0);
        items = items.sort((a, b) => b[params.sortBy]-a[params.sortBy]);
    }
    return items;
}

function levelFilter(min, max, arr) {
    if(min<=0 && max > 108) {
        return arr;
    }
    return arr.filter(x => x.level >= min && x.level<= max);
}

module.exports= {searchItem};