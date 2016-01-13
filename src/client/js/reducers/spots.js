const spot = (state, action) => {
	switch (action.type) {
		case "ADD":
			return {
				id: action.id,
				name: action.name,
				visited: false
			};
		case "TOGGLE":
			if (state.id !== action.id) {
				return state;
			}
			return {
				...state,
				visited: !state.visited
			};
		default:
			return state;
	}
}

export function spots(state = [], action) {
	switch (action.type) {
		case "ADD":
			return [
			...state,
			spot(undefined, action)
			];
		case "TOGGLE":
			return state.map(s => spot(s, action))
		default:
			return state;
	}
}
