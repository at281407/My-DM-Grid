let initState = {
    gridSize: 30,
    gridHeight: 33,
    gridWidth: 40,
    gridColor: "#3F3F3F",
    cellSize: "15px"
}

export const gridSettingsReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default gridSettingsReducer;