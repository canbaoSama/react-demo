import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Http from 'axios';
import logo from "./logo.svg";

class FirstComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {price: 0.00};
    }
    componentDidMount() {
        Http.get('https://api.mugglepay.com/api/usdt').then(res => {
            this.setState({
                price: res.data.price || '0.00'
            })
        }).catch(error => {
            console.error(error)
        })
    }
    render() {
        const { price } = this.state;
        return (
            App(price)
        );
    }
}

ReactDOM.render(
  <React.StrictMode>
    <FirstComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
