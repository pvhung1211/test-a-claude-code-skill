import { beforeEach, describe, expect, it } from "vitest";
import { setupCounter } from "./counter";

describe("setupCounter", () => {
	let button: HTMLButtonElement;

	beforeEach(() => {
		button = document.createElement("button");
	});

	it('initializes the button text to "count is 0"', () => {
		setupCounter(button);
		expect(button.innerHTML).toBe("count is 0");
	});

	it("increments the count by 1 on each click", () => {
		setupCounter(button);
		button.click();
		expect(button.innerHTML).toBe("count is 1");
	});

	it("increments correctly after multiple clicks", () => {
		setupCounter(button);
		button.click();
		button.click();
		button.click();
		expect(button.innerHTML).toBe("count is 3");
	});
});
