/**
 * @author Electrolysis
 * 
 */

const axios = require('axios');


async function searchItem(name) {

    params = {
        "action": "itemDB"
    }
    if(name === undefined || name === null || name === "") {
        params.category = "all";
    } else {
        params.search = name;
    }


    let response = await axios.get('https://api.wynncraft.com/public_api.php', {
        "params": params
    })
    let items = response.data.items
    console.log("succ");
    return items;
}

module.exports= {searchItem};