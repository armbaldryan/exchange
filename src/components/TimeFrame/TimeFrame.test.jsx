import TimeFrame from "./TimeFrame";
import React from "react";
import { render } from "@testing-library/react";
import { DateTimeEnum } from "store/types";

describe("Time Frame", () => {
	it("should render Time Frame", () => {
		const { container } = render(
			<TimeFrame dateTime={DateTimeEnum.year} changeTimeFrame={jest.fn()} />
		);
		expect(container).toMatchSnapshot();
	});

	it("should select Year button", () => {
		const { container, getByTestId } = render(
			<TimeFrame dateTime={DateTimeEnum.year} changeTimeFrame={jest.fn()} />
		);
		const wrapper = getByTestId("time-frame-wrapper");
		expect(wrapper.firstChild).toHaveClass("MuiButton-containedSizeMedium");
	});

	it("should select half year button", () => {
		const { container, getByTestId } = render(
			<TimeFrame dateTime={DateTimeEnum.halfYear} changeTimeFrame={jest.fn()} />
		);
		const wrapper = getByTestId("half-year");
		expect(wrapper).toHaveClass("MuiButton-containedSizeMedium");
	});

	it("should select month button", () => {
		const { container, getByTestId } = render(
			<TimeFrame dateTime={DateTimeEnum.month} changeTimeFrame={jest.fn()} />
		);
		const wrapper = getByTestId("month");
		expect(wrapper).toHaveClass("MuiButton-containedSizeMedium");
	});
});
