module.exports = {
    mutiple: function (array) {
        return array.map((arr) => arr.toObject());
    },
    objectConvert: function (objTo) {
        return objTo ? objTo.toObject() : objTo;
    },
};
