module.exports = {
    listToObject: function (listItem) {
        return listItem.map(item => item.toObject());
    },
    itemToObject: function (item) {
        return item ? item.toObject() : item;
    }
};
