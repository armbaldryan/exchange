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
		<TimeFrameWrapper>
			<TimeButton
				name={DateTimeEnum.year.toString()}
				onClick={changeTimeFrame}
				variant={dateTime === DateTimeEnum.year ? "contained" : "outlined"}
			>
				Year
			</TimeButton>
			<TimeButton
				name={DateTimeEnum.halfYear.toString()}
				onClick={changeTimeFrame}
				variant={dateTime === DateTimeEnum.halfYear ? "contained" : "outlined"}
			>
				6 Months
			</TimeButton>
			<TimeButton
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
