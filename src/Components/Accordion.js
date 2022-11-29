import React, {useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const [open, setOpen] = useState(false);

    const onTitleClick = (index) => {
        console.log(items[index]);
        setActiveIndex(index);
        setOpen(!open);
    }
    const renderedItems = items.map((item, index) => {
        // const activeClass = activeIndex === index ? 'active' : '';
        return(
            <React.Fragment key = {item.title}>
                <div className={`title ${activeIndex == index ? 'active' : ''}`} 
                    onClick = {() => {onTitleClick(index)}}>
                    <i className = "dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${activeIndex == index ? 'active' : ''}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return(
        <div>
            <div className='ui styled accordion'>
                {renderedItems}
            </div>
            <p className='index'>{activeIndex}</p>
        </div>
    )
}

export default Accordion;