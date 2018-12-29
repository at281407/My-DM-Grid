let initState = {
    gridSize: 30,
    gridHeight: 30,
    gridWidth: 30,
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