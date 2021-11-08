export interface ICurrency {
	[key: string]: string;
}

export interface ITimeSeries {
	[key: string]: {
		[key: string]: {
			[key: string]: {
				[key: string]: number;
			};
		};
	};
}

export enum ActionTypesEnum {
	SET_ALL_CURRENCY,
	ADD_TIMESERIES,
}

export interface StateModel {
	allCurrency?: ICurrency;
	timeseries: ITimeSeries;
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
