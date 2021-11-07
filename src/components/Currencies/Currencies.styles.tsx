import * as React from "react";

import { styled } from "@mui/material/styles";
import { IconButton, IconButtonProps } from "@mui/material";

export const CurrenciesWrapper = styled("div")(
	() => `
		display: flex;
		flexDirection: row;
		margin: 20px 0;
	`
);

export const SwitchButton = styled((props: IconButtonProps) => (
	<IconButton {...props} />
))(
	() => `
		width: 40px;
		height: 40px;
		align-self: center;
  		margin: 0 20px;
	`
);
