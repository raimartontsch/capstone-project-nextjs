import actualCreate from 'zustand';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

const reviews = [
    {
        id: nanoid(),
        firstName: 'Macki',
        lastName: 'Mustermensch',
        job: 'Facility Manager',
        company: 'Putz & Weg',
        phone: '0175/6733082',
        email: 'macki@putzundweg.com',
        website: 'http://beispielURL.de',
        edit: false,
    },
	
		  {
        id: nanoid(),
        firstName: 'Marlene',
        lastName: 'Mustermensch',
        job: 'Projekt Manager',
        company: 'Putz & Weg',
        phone: '0167/8956347',
        email: 'marlene@putzundweg.com',
        website: 'http://beispielURL.de',
        edit: false,
    },
	];

// a variable to hold reset functions for all stores declared in the app
const storeResetFns = new Set();

// when creating a store, we get its initial state, create a reset function and add it in the set
const create = createState => {
	const store = actualCreate(createState);
	const initialState = store.getState();
	initialState.myContacts = myContacts;
	storeResetFns.add(() => store.setState(initialState, true));
	return store;
};

// Reset all stores after each test run
afterEach(() => {
	act(() => storeResetFns.forEach(resetFn => resetFn()));
});

export default create;