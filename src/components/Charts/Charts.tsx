import React from "react";
import Plot from "react-plotly.js";

type Props = {
	to: string;
	from: string;
	selectedRate: {
		[key: string]: {
			[key: string]: number;
		};
	} | null;
};

const TimeFrame = (props: Props): JSX.Element | null => {
	const { selectedRate, to, from } = props;

	return selectedRate && to ? (
		<Plot
			data={[
				{
					x: Object.keys(selectedRate),
					y: Object.values(selectedRate).map(
						(item: { [index: string]: number }) => item[to]
					),
					type: "scatter",
					mode: "lines+markers",
					marker: { color: "#000" },
					name: to,
				},
			]}
			layout={{
				width: 968,
				height: 400,
				title: `${from} to ${to} Chart`,
			}}
		/>
	) : null;
};

export default TimeFrame;
