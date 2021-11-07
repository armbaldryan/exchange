import * as React from "react";

import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

export const TimeFrameWrapper = styled("div")(
	() => `
		display: flex;
		flexDirection: row;
		margin: 30px 0;
	`
);

export const TimeButton = styled((props: ButtonProps) => <Button {...props} />)(
	() => `
  		margin-right: 10px;
		border-radius: 0;
	`
);
