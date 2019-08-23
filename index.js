window.onload = function() {
    const arr = ["line n°1", "bus n°24", "tramway n°3", "line n°2", "bus n°20", "tramway n°312", "line n°130", "bus n°28", "tramway n°20", "line n°101"];
    const arr2 = [];
    arr.forEach((dataset) => {
        if (dataset.split(" ")[0] === 'line') {
            arr2.push(dataset);
        }
    })
    const arr3 = arr2.sort ((a, b) => {
        return  a.split("°")[1] - b.split("°")[1];
    });

    console.log(arr3);
};