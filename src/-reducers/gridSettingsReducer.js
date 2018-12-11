let initState = {
    gridSize: 100,
    gridHeight: 100,
    gridWidth: 100,
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