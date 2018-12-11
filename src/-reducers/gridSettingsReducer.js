let initState = {
    gridSize: 53,
    gridHeight: 53,
    gridWidth: 53,
    gridColor: "#FFFFFF",
    cellSize: "15px"
}

export const gridSettingsReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default gridSettingsReducer;