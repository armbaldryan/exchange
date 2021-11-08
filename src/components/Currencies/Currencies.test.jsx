import Currencies from "./Currencies";
import React from "react";
import { render } from "@testing-library/react";

describe("Currencies", () => {
	it("should render Currencies", () => {
		const { container } = render(
			<Currencies
				currencies={{ AMD: "AMD", USD: "USD" }}
				from="AMD"
				to="USD"
				handleChange={jest.fn()}
				switchHandler={jest.fn()}
			/>
		);
		expect(container).toMatchSnapshot();
	});

	it("should render right input values", () => {
		const { getAllByRole } = render(
			<Currencies
				currencies={{ AMD: "AMD", USD: "USD" }}
				from="AMD"
				to="USD"
				handleChange={jest.fn()}
				switchHandler={jest.fn()}
			/>
		);
		const wrapper = getAllByRole("textbox");
		expect(wrapper[0]).toHaveValue("AMD");
		expect(wrapper[1]).toHaveValue("USD");
	});
});
