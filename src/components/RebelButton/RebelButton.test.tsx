import React from 'react';
import { render } from "@testing-library/react"
import RebelButton from "./RebelButton";


describe("RebelButton", () => {
    test("RebelButton component rendered correctly", () => {
        render(<RebelButton text="Test render" />);
    })
})