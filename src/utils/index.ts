import dayjs from "dayjs";

export const getDateByRange = (range: number) => {
	return dayjs().add(-range, "month").format("YYYY-MM-DD");
};

export const getRequest = (url: string) =>
	fetch(url, {
		method: "GET",
	}).then((res) => res.json());
