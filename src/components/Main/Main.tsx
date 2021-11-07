import Currencies from "components/Currencies";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { getAllCurrency } from "services";
import { useStore } from "store";
import { ActionTypesEnum } from "store/types";
import { Content } from "./Main.styles";

const Main = () => {
	const [selectors, setSelectors] = useState({
		from: "",
		to: "",
	});

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

	if (!allCurrency) {
		return <p>LOADING....</p>;
	}

	const changeCurrency =
		(type: "from" | "to") => (_: SyntheticEvent, value: string) => {
			console.log(value, type);
			setSelectors({
				...selectors,
				[type]: value,
			});
		};

	const switchHandler = () =>
		setSelectors((prevState) => ({
			...prevState,
			from: prevState.to,
			to: prevState.from,
		}));

	return (
		<Content>
			<Currencies
				currencies={allCurrency}
				handleChange={changeCurrency}
				from={from}
				to={to}
				switchHandler={switchHandler}
			/>
		</Content>
	);
};

export default Main;
