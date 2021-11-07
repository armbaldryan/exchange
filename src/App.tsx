import React from "react";
import { Wrapper, Header } from "./App.styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import { blueGrey } from "@mui/material/colors";

function App() {
	return (
		<Wrapper>
			<GlobalStyles
				styles={{
					body: { backgroundColor: blueGrey[200] },
				}}
			/>
			<Header>Exchange rates</Header>
		</Wrapper>
	);
}

export default App;
