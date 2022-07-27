import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Todo from './Todo';

describe("Button Checking", () => {
    it("Should hava a item", ()=>{
        const{getByTestId} = render(<Todo />);
        expect(getByTestId("todo-item")).toBeDefined();

    })
    it("Should hava a completed button", ()=>{
        const{getByTestId} = render(<Todo />);
        expect(getByTestId("todo-complete")).toBeDefined();

    })
    it("Should hava a Trash button", ()=>{
        const{getByTestId} = render(<Todo />);
        expect(getByTestId("todo-trash")).toBeDefined();
    })

    
})

describe("Testing the Functionality", () => {
    it("Should add the given text", () => {
        const {getByTestId} = render(<Todo />);
        fireEvent.change(getByTestId("todo-item"), {target:{value:""}});
        
    })
})