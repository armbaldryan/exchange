import { BASE_URL, ACCESS_KEY } from "configs";
import { getRequest } from "utils";

export const getAllCurrency = () =>
	getRequest(`${BASE_URL}/symbols?access_key=${ACCESS_KEY}`);

export const getTimeseries = (
	startDate: string,
	endDate: string,
	symbol: string,
	base: string
) =>
	getRequest(
		`${BASE_URL}/timeseries?access_key=${ACCESS_KEY}&start_date=${startDate}&end_date=${endDate}&symbols=${symbol}&base=${base}`
	);
