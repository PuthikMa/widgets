import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Example from './components/Example';
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
const showAccordion = () =>{
    if(window.location.pathname === "/"){
        return <Accordion items={items} />
    }
}
const showList = () => {
    if(window.location.pathname === '/list'){
        return <Search />;
    }
}
const showDropdown = () => {
    if(window.location.pathname === '/dropdown'){
        return <Dropdown />
    }
}
const showTranslate = () => {
    if(window.location.pathname === '/translate'){
        return <Translate />;
    }
}
export default  () => {
    const [selected,setSelected] = useState(options[0])

    return (
        <div>
            {showAccordion()}
            {showList()}
            {showTranslate()}
        </div>
    )
};