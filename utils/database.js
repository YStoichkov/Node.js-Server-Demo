const database = {};

function nextId() {
    let id;
    //we create an empty variable
    do {
        id = ('00000000' + (Math.random() * 99999999 | 0).toString(16)).slice(-8);
        //we assign a random number to the variable
    }
    while (database[id] != undefined);
    //
    return id;
}

function addItem(item) {
    database[nextId()] = item;
}

function deleteItem(item) {
    delete database[item];
}

module.exports = {
    addItem,
    deleteItem,
    database
};