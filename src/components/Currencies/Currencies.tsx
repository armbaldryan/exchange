import React, { SyntheticEvent } from "react";

import FormControl from "@mui/material/FormControl";
import Autocomplete from "@mui/material/Autocomplete";
import { CurrenciesWrapper, SwitchButton } from "./Currencies.styles";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TextField from "@mui/material/TextField";

type Props = {
	currencies: any;
	from?: string;
	to?: string;
	handleChange: (
		types: "from" | "to"
	) => (event: SyntheticEvent, value: any) => void;
	switchHandler: () => void;
};

const Currencies = (props: Props) => {
	const { currencies, from, to, handleChange, switchHandler } = props;

	if (currencies) {
		return (
			<CurrenciesWrapper>
				<FormControl fullWidth>
					<Autocomplete
						onChange={handleChange("from")}
						options={Object.keys(currencies)}
						renderInput={(params) => <TextField {...params} label="From" />}
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
						options={Object.keys(currencies)}
						renderInput={(params) => <TextField {...params} label="To" />}
					/>
				</FormControl>
			</CurrenciesWrapper>
		);
	}

	return <p>Loading...</p>;
};

export default Currencies;
