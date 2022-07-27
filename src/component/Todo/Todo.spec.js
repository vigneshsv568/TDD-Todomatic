import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Todo from './Todo';
import Form from '../Form/Form'

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
        const {getByTestId} = render(<Form />);
        fireEvent.change(getByTestId("input-field"), {target:{value:"hi"}});
        fireEvent.click(getByTestId("input-button"));
        fireEvent.click(getByTestId("todo-complete"));
        expect(getByTestId("todo-item")).toHaveTextContent("hi");

    })

})