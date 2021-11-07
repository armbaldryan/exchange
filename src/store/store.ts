import { createContext, useContext } from "react";

import { StateModel, ActionTypesEnum, ActionModel } from "./types";

export const initialState: StateModel = {};

export const reducer = (
	state: StateModel,
	{ type, payload }: ActionModel
): StateModel => {
	switch (type) {
		case ActionTypesEnum.SET_ALL_CURRENCY:
			return { ...state, allCurrency: payload };

		default:
			return state;
	}
};

export const Store = createContext({
	state: initialState,
	dispatch: (args: any) => {},
});

export const useStore = () => useContext(Store);
