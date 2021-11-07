import React, { SyntheticEvent, useEffect, useState, MouseEvent } from "react";
import Currencies from "components/Currencies";
import TimeFrame from "components/TimeFrame";
import { getAllCurrency } from "services";
import { useStore } from "store";
import { ActionTypesEnum, DateTimeEnum } from "store/types";
import { Content } from "./Main.styles";

const Main = () => {
	const [selectors, setSelectors] = useState<{
		from: string;
		to: string;
	}>({
		from: "",
		to: "",
	});
	const [dateTime, setDiteTime] = useState<DateTimeEnum | undefined>();

	const { from, to } = selectors;

	const {
		state: { allCurrency },
		dispatch,
	} = useStore();

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
		</Content>
	);
};

export default Main;
