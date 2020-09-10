import React, {useState} from 'react';
import {Transition, CSSTransition} from "react-transition-group";
import {List} from "./List";

function App() {

    const [toggle, setToggle] = useState(true)
    const [toggle2, setToggle2] = useState(true)
    const [items, setItems] = useState([
        {id: 1, title: 'Item 1'},
        {id: 2, title: 'Item 2'},
        {id: 3, title: 'Item 3'},
        {id: 4, title: 'Item 4'}
    ])

    const removeItem = id => setItems(items.filter(i => i.id !== id))
    const addItem = () => {
        const title = prompt('Enter item title')
        const id = Date.now()
        setItems(items.concat([{title, id}]))
    }

    return (
        <div className="container">
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
            <button onClick={() => setToggle2(!toggle2)}>Toggle2</button>
            <button onClick={addItem}>Add item</button>
            <hr/>
            <div className='blocks'>
                <Transition
                    in={toggle}
                    timeout={{
                        enter: 1000, exit: 500
                    }}
                    mountOnEnter
                    unmountOnExit
                    onEnter={() => console.log('OnEnter')}
                    onEntering={() => console.log('onEntering')}
                    onEntered={() => console.log('onEntered')}
                    onExit={() => console.log('onExit')}
                    onExiting={() => console.log('onExiting')}
                    onExited={() => console.log('onExited')}
                >
                    {state => <div className={`square blue ${state}`}> {toggle.toString()} {state}</div>}
                </Transition>
                <CSSTransition
                in={toggle2}
                timeout={1000}
                classNames='os'
                mountOnEnter
                unmountOnExit
                >
                    <div className='square orange'>{toggle2.toString()}</div>
                </CSSTransition>
            </div>
            <hr/>
            <div className="blocks">
                <List items={items} onRemove={removeItem}/>
            </div>
        </div>
    );
}

export default App;
