function _processAction(url, callback) {
    fetch(url) // Call the fetch function passing the url of the API as a parameter
        .then(
            response => response.json(),
            error => console.log('Danger Will Robinson', error)
        )
        .then(callback)
};

export const ActionTypes = {
    SEARCH: "SEARCH",
    TOGGLENAV: "TOGGLENAV"
}

export const Actions = {

    search: function (gameName) {
        return function(dispatch) {
            _processAction('/api/searchGameList?gameName=' + gameName, function(data){
                dispatch(_privateActions.search(data));
            });
        }
    },
    toggleNav: function (navState) {
        return {
            type: ActionTypes.TOGGLENAV,
            navState: navState
        }
    }
}

const _privateActions = {

    search: function (gameList) {
        return {
            type: ActionTypes.SEARCH,
            gameList: gameList
        }
    }
}