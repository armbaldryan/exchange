import React, { SyntheticEvent, useMemo } from "react";

import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import { CurrenciesWrapper, SwitchButton } from "./Currencies.styles";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TextField from "@mui/material/TextField";
import { ICurrency } from "store/types";

type Props = {
	currencies: ICurrency;
	from?: string;
	to?: string;
	handleChange: (
		types: "from" | "to"
	) => (event: SyntheticEvent, value: string | null) => void;
	switchHandler: () => void;
};

const Currencies = (props: Props) => {
	const { currencies, from, to, handleChange, switchHandler } = props;

	const currencyOptions = useMemo(() => Object.keys(currencies), [currencies]);

	if (currencies) {
		return (
			<CurrenciesWrapper>
				<FormControl fullWidth>
					<Autocomplete
						onChange={handleChange("from")}
						options={currencyOptions}
						renderInput={(params) => (
							<TextField
								{...params}
								label="From"
								data-testid="from"
								aria-label="from"
							/>
						)}
						value={from}
					/>
				</FormControl>
				<SwitchButton
					disabled={!from || !to}
					aria-label="CompareArrowsIcon"
					color="primary"
					onClick={switchHandler}
				>
					<CompareArrowsIcon />
				</SwitchButton>
				<FormControl fullWidth>
					<Autocomplete
						onChange={handleChange("to")}
						options={currencyOptions}
						renderInput={(params) => (
							<TextField {...params} label="To" data-testid="to" />
						)}
						value={to}
					/>
				</FormControl>
			</CurrenciesWrapper>
		);
	}

	return <p>Loading...</p>;
};

export default Currencies;
