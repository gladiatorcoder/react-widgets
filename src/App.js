import React, {useState} from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';

const items = [
    {
        title: "What is React?",
        content: "React is a frontend Javascript Library"
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS library among engineers"
    },
    {
        title: "How do you use React?",
        content: "You use React by creating components" 
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'A shade of blue',
        value: 'blue'
    }
]

// const showAccordion = () => {
//     if(window.location.pathname == '/'){
//         return <Accordion items = {items}/>
//     }
// }

export default () => {
    const [selected, setSelected] = useState(options[1]);
    // const [showDropdown, setShowDropdown] = useState(true);
    // const [activeComponent, setActiveComponent] = useState('accordion')
    return(
        <div>
            {/* <Accordion items = {items}/> */}
            {/* <Search /> */}
            {/* <button onClick={() => {setShowDropdown(!showDropdown)}}>Toggle Dropdown</button>
            {showDropdown ? <Dropdown 
            selected = {selected}
            setSelected = {setSelected}
            options={options}/> : null} */}
            {/* <Translate /> */}
            {/* {showAccordion()} */}
            <Header />
            <Route path = "/">
                <Accordion items = {items}/>
            </Route>
            <Route path = "/list">
                <Search />
            </Route>
            <Route path = "/dropdown">
                <Dropdown label = "Select a Color" options = {options} selected = {selected} setSelected = {setSelected}/>
            </Route>
            <Route path = "/translate">
                <Translate />
            </Route>
        </div>
    )
};

