import { styled } from "@mui/material/styles";

export const Content = styled("div")(
	({ theme }) => `
    background-color: ${theme.palette.background.paper};
    box-shadow: ${theme.shadows[1]};
    border-radius: ${theme.shape.borderRadius}px;
    padding: ${theme.spacing(2)};
  `
);
