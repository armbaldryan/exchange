import React, {
	SyntheticEvent,
	useEffect,
	useState,
	MouseEvent,
	useMemo,
} from "react";
import Currencies from "components/Currencies";
import TimeFrame from "components/TimeFrame";
import { getAllCurrency, getTimeseries } from "services";
import { useStore } from "store";
import { ActionTypesEnum, DateTimeEnum } from "store/types";
import { Content } from "./Main.styles";
import dayjs from "dayjs";
import { getDateByRange } from "utils";
import Charts from "components/Charts";

const Main = () => {
	const [selectors, setSelectors] = useState<{
		from: string;
		to: string;
	}>({
		from: "",
		to: "",
	});
	const [dateTime, setDiteTime] = useState<DateTimeEnum>(DateTimeEnum.year);

	const { from, to } = selectors;

	const {
		state: { allCurrency, timeseries },
		dispatch,
	} = useStore();

	const selectedRate = useMemo(
		() =>
			dateTime !== undefined ? timeseries?.[`${to}_${from}`]?.[dateTime] : null,
		[dateTime, to, from, timeseries]
	);

	useEffect(() => {
		getAllCurrency().then(({ success, symbols }) => {
			if (success) {
				dispatch({
					type: ActionTypesEnum.SET_ALL_CURRENCY,
					payload: symbols,
				});
			}
		});
	}, []);

	useEffect(() => {
		if (from && to) {
			if (timeseries?.[`${to}_${from}`]?.[dateTime]) {
				return;
			}

			let startDate = "";
			const endDate = dayjs().format("YYYY-MM-DD");

			switch (dateTime) {
				case DateTimeEnum.month:
					startDate = getDateByRange(1);
					break;
				case DateTimeEnum.year:
					startDate = getDateByRange(12);
					break;
				case DateTimeEnum.halfYear:
					startDate = getDateByRange(6);
					break;
			}

			getTimeseries(startDate, endDate, to, from).then(({ success, rates }) => {
				if (success) {
					dispatch({
						type: ActionTypesEnum.ADD_TIMESERIES,
						payload: { key: `${to}_${from}`, dateTime: dateTime, rates },
					});
				}
			});
		}
	}, [to, from, dateTime]);

	const changeCurrency =
		(type: "from" | "to") => (_: SyntheticEvent, value: string | null) =>
			setSelectors({
				...selectors,
				[type]: value,
			});

	const switchHandler = (): void =>
		setSelectors((prevState) => ({
			...prevState,
			from: prevState.to,
			to: prevState.from,
		}));

	const changeTimeFrame = (event: MouseEvent<HTMLElement>) =>
		setDiteTime(Number((event.target as HTMLButtonElement).name));

	if (!allCurrency) {
		return <p>LOADING....</p>;
	}

	return (
		<Content>
			<Currencies
				currencies={allCurrency}
				handleChange={changeCurrency}
				from={from}
				to={to}
				switchHandler={switchHandler}
			/>
			<TimeFrame changeTimeFrame={changeTimeFrame} dateTime={dateTime} />
			<Charts selectedRate={selectedRate} from={from} to={to} />
		</Content>
	);
};

export default Main;
