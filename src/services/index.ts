import { BASE_URL, ACCESS_KEY } from "configs";

export const getAllCurrency = () =>
	fetch(`${BASE_URL}/symbols?access_key=${ACCESS_KEY}`, {
		method: "GET",
	}).then((res) => res.json());
