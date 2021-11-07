import React, { useReducer } from "react";

import { Store, reducer, initialState } from "store";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Wrapper, Header } from "./App.styles";
import { blueGrey } from "@mui/material/colors";
import Main from "./components/Main";

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Store.Provider value={{ state, dispatch }}>
			<Wrapper>
				<GlobalStyles
					styles={{
						body: { backgroundColor: blueGrey[200] },
					}}
				/>
				<Header>Exchange rates</Header>
				<Main />
			</Wrapper>
		</Store.Provider>
	);
};

export default App;
