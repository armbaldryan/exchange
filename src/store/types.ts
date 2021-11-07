export interface ICurrency {
	[key: string]: string;
}

export enum ActionTypesEnum {
	SET_ALL_CURRENCY,
	ADD_TIMESERIES,
}

export interface StateModel {
	allCurrency?: ICurrency;
}

export interface ActionModel {
	type: ActionTypesEnum;
	payload: any;
}
