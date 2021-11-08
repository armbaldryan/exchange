import React, { MouseEventHandler } from "react";

import { TimeButton, TimeFrameWrapper } from "./TimeFrame.styles";
import { DateTimeEnum } from "store/types";

type Props = {
	dateTime?: number;
	changeTimeFrame: MouseEventHandler<HTMLButtonElement>;
};

const TimeFrame = (props: Props) => {
	const { changeTimeFrame, dateTime } = props;

	return (
		<TimeFrameWrapper data-testid="time-frame-wrapper">
			<TimeButton
				data-testid="year"
				name={DateTimeEnum.year.toString()}
				onClick={changeTimeFrame}
				variant={dateTime === DateTimeEnum.year ? "contained" : "outlined"}
			>
				Year
			</TimeButton>
			<TimeButton
				data-testid="half-year"
				name={DateTimeEnum.halfYear.toString()}
				onClick={changeTimeFrame}
				variant={dateTime === DateTimeEnum.halfYear ? "contained" : "outlined"}
			>
				6 Months
			</TimeButton>
			<TimeButton
				data-testid="month"
				name={DateTimeEnum.month.toString()}
				onClick={changeTimeFrame}
				variant={dateTime === DateTimeEnum.month ? "contained" : "outlined"}
			>
				Month
			</TimeButton>
		</TimeFrameWrapper>
	);
};

export default TimeFrame;
