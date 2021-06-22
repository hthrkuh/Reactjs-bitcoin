import React from 'react';
import Plot from 'react-plotly.js';
import Typed from 'react-typed';
import Switch from "react-switch";
import Loader from "react-loader-spinner";




class Stock extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div id="bitcoin_message">
          <Typed
            strings={['BITCOIN Market']}

            backDelay={10000}
            typeSpeed={40}
            backSpeed={100}

            loop
          />
        </div>

        {this.props.loading == false ? < Plot

          data={[
            {
              x: this.props.data.dates,
              y: this.props.data.open,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'green' },
              name: 'open'
            },
            {
              x: this.props.data.dates,
              y: this.props.data.close,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'red' },
              name: 'close'

            },
            {
              x: this.props.data.dates,
              y: this.props.data.high,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'black' },
              name: 'high'

            },
            {
              x: this.props.data.dates,
              y: this.props.data.low,
              type: 'scatter',
              mode: 'lines+markers',
              marker: { color: 'blue' },
              name: 'low'

            },

          ]}
          layout={{
            autosize: true,
            title: `start date:${this.props.data.dates[this.props.data.dates.length - 1]} | end dade: ${this.props.data.dates[0]}
`
          }}
          style={{ width: "100%", height: "100%" }}
        /> : <div className="" style={{
          top: "-73px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }}>
          <Loader
            type="Circles"
            color="#ff9800"
            height={100}
            width={100}
            timeout={5000}
          />
        </div>}
        <div className="bg-light m-auto rounded-circle row w-50">
          <span>USA/ILS</span>
          <label>
            <Switch
              checkedIcon={<div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 15,
                  color: "red",
                  paddingRight: 2
                }}
              >
                USA
              </div>}
              uncheckedIcon={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 15,
                    color: "blue",
                    paddingRight: 2
                  }}
                >
                  ILS
                </div>
              }
              onChange={() => {
                this.props.coin()

              }} checked={this.props.checked} />
          </label>

          <div className="follow-btn pt-1">

            <button onClick={() => this.props.flip()}>BACK</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stock;