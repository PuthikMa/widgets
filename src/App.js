import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Example from './components/Example';
import Route from './components/Route';
import Header from './components/Header';
const items = [
    {
        title: 'What is React?',
        content: 'React is front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS Library among enginners'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options =[
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    }
]

export default  () => {
    const [selected,setSelected] = useState(options[0])

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color" options={options} onSelectedChange={setSelected} selected={selected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
};