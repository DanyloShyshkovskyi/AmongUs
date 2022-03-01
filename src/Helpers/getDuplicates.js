export const getDuplicates = (array) => {
    var duplicates = {};
    for (var i = 0; i < array.length; i++) {
        if(duplicates.hasOwnProperty(array[i])) {
            duplicates[array[i]].push(i);
        }
        else if ((array.lastIndexOf(array[i]) === i) || (array.lastIndexOf(array[i]) !== i)) {
            duplicates[array[i]] = [i];
        }
    }

    return duplicates;
};