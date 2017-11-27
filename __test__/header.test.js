
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json'
import Header from '../js/components/Header.jsx';


test('Should render properly', () => {
	const component = shallow(<Header />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
