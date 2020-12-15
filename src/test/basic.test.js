import React from "react";
import {Header} from "../components/Header";
import Character from "../components/Characters/Character";
import {act} from "react-dom/test-utils";
import App from "../App";
import ReactDom, {unmountComponentAtNode} from "react-dom";
import {beforeEach, afterEach, it} from "@jest/globals";
import {BrowserRouter} from "react-router-dom";

let container = null;

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDom.render(<App />, div);
	ReactDom.unmountComponentAtNode(div);
});


beforeEach(() => {
	container = document.createElement('div');
	document.body.append(container);
})

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
})

it('should render correctly', () => {
	act( () => {
		ReactDom.render(
			<BrowserRouter>
				<Header/>
			</BrowserRouter>
			, container);
	});
	expect(container.querySelector('.header__link__text').textContent).toBe("Rick and Morty App");
})

it('should render character with props', () => {
	const fakeProps = {
		path : '',
		name : 'Fake',
		gender : 'male',
		image : 'http://img.fake/1.png',
		species : 'Human',
		status : 'Alive',
		type : '123',
		url : '/123',
	};
	act( () => {
		ReactDom.render(<BrowserRouter><Character {...fakeProps}/></BrowserRouter>, container);
	});
	expect(container.querySelectorAll('.TextLine')[0].textContent).toBe('Name : ' + fakeProps.name);
	expect(container.querySelectorAll('.TextLine')[1].textContent).toBe('Gender : ' + fakeProps.gender);
	expect(container.querySelectorAll('.TextLine')[2].textContent).toBe('Status : ' + fakeProps.status);
	expect(container.querySelectorAll('.TextLine')[3].textContent).toBe('Species : ' + fakeProps.species);
	if (fakeProps.type) {
		expect(container.querySelectorAll('.TextLine')[4].textContent).toBe('Type : ' + fakeProps.type);
	}
	expect(container.querySelector('.Image').src).toBe(fakeProps.image);
	expect(container.querySelector('.Image').alt).toBe(fakeProps.url);
});


