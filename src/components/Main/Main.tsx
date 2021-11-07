import Currencies from "components/Currencies";
import React, { useEffect } from "react";
import { getAllCurrency } from "services";
import { useStore } from "store";
import { ActionTypesEnum } from "store/types";
import { Content } from "./Main.styles";

const Main = () => {
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

	const changeCurrency = () => {};

	const switchHandler = () => {};

	return (
		<Content>
			<Currencies
				currencies={allCurrency}
				handleChange={changeCurrency}
				from={"USD"}
				to={"AMD"}
				switchHandler={switchHandler}
			/>
		</Content>
	);
};

export default Main;
