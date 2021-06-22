import React, { Component } from "react";
import Loader from "react-loader-spinner";

import CardFront from "./cardfront"
import Stock from "./Stock"
import "../css/card.css"

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            metadata: {},
            stockChartXValues_open: [],
            stockChartYValues_open: [],
            stockChartXValues_close: [],
            stockChartYValues_close: [],
            data: {},
            flip: false,
            loading: true,
            err: false,
            coin: "ILS",
            checked: false,
            loading2: true,
            dates: []
        }

    }
    coin = e => {

        this.setState((state) => {
            return { loading2: true, checked: !this.state.checked, coin: state.coin == "ILS" ? "USD" : "ILS" }
        }
            , () => this.fetchStock())

    }
    componentDidMount() {
        this.fetchStock();
    }
    fetchStock = (date = this.state.dates) => {
        const pointerToThis = this;
        console.log(pointerToThis);
        const API_KEY = 'HGJWFG4N8AQ66ICD'; //'F41ON15LGCFM4PR7';// "9V66ST5SY883CWI1"//"GPT5COX9H2LGBQ8Y"//
        let StockSymbol = 'BTC';
        let market = this.state.coin;
        let API_Call = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${StockSymbol}&market=${market}&outputsize=compact&apikey=${API_KEY}`;

        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    console.log(data);
                    if (data.Information || data.Note) {
                        alert(data.Information || data.Note)
                        return
                    }
                    let coin = pointerToThis.state.coin
                    const obj = {
                        dates: [],
                        open: [],
                        high: [],
                        low: [],
                        close: [],
                    }
                    if (!date.length) {

                        const keys = Object.keys(obj)
                        for (var key in data['Time Series (Digital Currency Daily)']) {
                            obj.dates.push(key);


                            [`1a. open (${coin})`, `2a. high (${coin})`, `3a. low (${coin})`, `4a. close (${coin})`].forEach((ke2y, i) => {
                                ke2y = data['Time Series (Digital Currency Daily)'][key][ke2y]
                                obj[keys[i + 1]].push(ke2y)
                            });
                        }

                    }
                    else {

                        if (data['Time Series (Digital Currency Daily)'][date[0]]) {
                            let dat2a = data['Time Series (Digital Currency Daily)']
                            let dates = Object.keys(dat2a)
                            dates.splice(dates.indexOf(date[0]) + 1, dates.length);
                            console.log(dat2a)
                            dates.splice(0, dates.indexOf(date[1]) - 1);
                            console.log(dat2a)
                            let obj2 = {}
                            dates.forEach((d) => {
                                obj2[d] = data['Time Series (Digital Currency Daily)'][d]
                            })

                            let keys = Object.keys(obj)
                            for (var key in obj2) {
                                obj.dates.push(key);
                                let x = [`1a. open (${coin})`, `2a. high (${coin})`, `3a. low (${coin})`, `4a. close (${coin})`]

                                x.forEach((ke2y, i) => {
                                    ke2y = obj2[key][ke2y]
                                    obj[keys[i + 1]].push(ke2y)
                                });
                            }

                        } else {
                            pointerToThis.setState({ err: true })
                        }


                    }

                    if (obj.dates.length) {
                        pointerToThis.setState({
                            loading2: false,
                            err: false,
                            loading: false,
                            metadata: data['Meta Data'],
                            data: obj,
                            dates: date

                        });

                    }
                    else {
                        pointerToThis.setState({ err: true })
                    }
                }
            )

    }
    flip = e => {

        this.setState({ flip: !this.state.flip }, () => console.log(this.state.flip))
    }

    render() {
        return (
            this.state.loading ?
                <div className="poster-container" style={{
                    top: "20px",
                    display: "flex",
                    right: "12px",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Loader
                        type="Circles"
                        color="#ff9800"
                        height={300}
                        width={300}
                        timeout={5000}
                    />
                </div>
                :
                <div className=" container ">

                    <div className={this.state.flip ? "poster flipped" : "poster"}>

                        <div className=" pb-4 pic">

                            <CardFront
                                coin={this.coin}
                                err={this.state.err}
                                metadata={this.state.metadata}
                                flip={this.flip}
                                fetchStock={this.fetchStock}
                                checked={this.state.checked}
                            />


                        </div>

                        <div className="back container pic ">
                            <Stock
                                flip={this.flip}
                                coin={this.coin}
                                checked={this.state.checked}
                                loading={this.state.loading2}
                                data={this.state.data}
                            />
                        </div>
                    </div>
                </div>
        )
    }
}






class FlippingCardPage extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="container ">
                <Card />
            </div>
        );
    }
}







export default FlippingCardPage;