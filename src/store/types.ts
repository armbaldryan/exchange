export interface ICurrency {
	[key: string]: string;
}

export enum ActionTypesEnum {
	SET_ALL_CURRENCY,
	ADD_TIMESERIES,
}

export interface StateModel {
	allCurrency?: ICurrency;
	timeseries?: any;
}

export interface ActionModel {
	type: ActionTypesEnum;
	payload: any;
}

export enum DateTimeEnum {
	year,
	month,
	halfYear,
}
