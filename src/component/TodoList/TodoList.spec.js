import React from "react";
import { render } from '@testing-library/react';
import TodoList from "./TodoList";


describe("Basic", () =>{
    it("should hava list", () =>{
        const {getByTestId} = render(<TodoList />);
        expect(getByTestId("input-list")).toBeDefined();
    })
})