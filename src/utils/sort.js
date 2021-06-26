export function sortText(collection, sortOrder, setSortOrder, sortBy) {
    if (sortOrder === 'desc') setSortOrder('asc');
    else setSortOrder('desc');
    if (sortOrder === 'asc') collection.sort(function (a, b) {
        if (a[sortBy] > b[sortBy]) return 1;
        if (a[sortBy] < b[sortBy]) return -1;
        return 0;
    });
    if (sortOrder === 'desc') collection.sort(function (a, b) {
        if (a[sortBy] < b[sortBy]) return 1;
        if (a[sortBy] > b[sortBy]) return -1;
        return 0;
    });
    return collection;
}
export function sortNumber(collection, sortOrder, setSortOrder, sortBy) {
    if (sortOrder === 'desc') setSortOrder('asc');
    else setSortOrder('desc');
    if (sortOrder === 'asc') collection.sort((a, b) => a[sortBy] - b[sortBy]);
    if (sortOrder === 'desc') collection.sort((a, b) => b[sortBy] - a[sortBy]);
    return collection;
}