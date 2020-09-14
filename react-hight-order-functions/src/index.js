import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    state = {
        starWarsChars: [
            {name: 'Дарк Вейдер', side: 'dark'},
            {name: 'Люк Скайворкер', side: 'light'},
            {name: 'Палпатин', side: 'dark'},
            {name: 'Обиван Кеноби', side: 'light'}
        ]
    }

    render() {
        return (
            <ul>
                { this.state.starWarsChars.map((char, index) => {
                    return (
                        <li key={char.name + index} >
                            <strong>{char.name}</strong> - {char.side}
                        </li>
                    )
                })

                }
            </ul>)
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
