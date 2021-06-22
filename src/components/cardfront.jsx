
import DTimePicker from "./datetime"
import React, { Component } from "react";
import Switch from "react-switch";

// React component for the front side of the card
export default class CardFront extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metadata: {},
        }
    }




    render() {
        const metadata = this.props.metadata

        return (

            <div className="  card">

                <div className="banner flex-fill">
                    <svg viewBox="30 1 6 60" >
                        <g transform="translate(0.00630876,-0.00301984)">
                            <path fill="#f7931a" d="m63.033,39.744c-4.274,17.143-21.637,27.576-38.782,23.301-17.138-4.274-27.571-21.638-23.295-38.78,4.272-17.145,21.635-27.579,38.775-23.305,17.144,4.274,27.576,21.64,23.302,38.784z" />
                            <path fill="#FFF" d="m46.103,27.444c0.637-4.258-2.605-6.547-7.038-8.074l1.438-5.768-3.511-0.875-1.4,5.616c-0.923-0.23-1.871-0.447-2.813-0.662l1.41-5.653-3.509-0.875-1.439,5.766c-0.764-0.174-1.514-0.346-2.242-0.527l0.004-0.018-4.842-1.209-0.934,3.75s2.605,0.597,2.55,0.634c1.422,0.355,1.679,1.296,1.636,2.042l-1.638,6.571c0.098,0.025,0.225,0.061,0.365,0.117-0.117-0.029-0.242-0.061-0.371-0.092l-2.296,9.205c-0.174,0.432-0.615,1.08-1.609,0.834,0.035,0.051-2.552-0.637-2.552-0.637l-1.743,4.019,4.569,1.139c0.85,0.213,1.683,0.436,2.503,0.646l-1.453,5.834,3.507,0.875,1.439-5.772c0.958,0.26,1.888,0.5,2.798,0.726l-1.434,5.745,3.511,0.875,1.453-5.823c5.987,1.133,10.489,0.676,12.384-4.739,1.527-4.36-0.076-6.875-3.226-8.515,2.294-0.529,4.022-2.038,4.483-5.155zm-8.022,11.249c-1.085,4.36-8.426,2.003-10.806,1.412l1.928-7.729c2.38,0.594,10.012,1.77,8.878,6.317zm1.086-11.312c-0.99,3.966-7.1,1.951-9.082,1.457l1.748-7.01c1.982,0.494,8.365,1.416,7.334,5.553z" />
                        </g>
                    </svg>

                </div>
                <div className="menu">
                    <div className="opener"><span></span><span></span><span></span></div>
                </div>
                <div className="col">
                    <div className="border border-bottom-0 border-top-0 d-flex flex-column h-100 justify-content-center" style={{

                    }}>


                        <h2 className="name">{metadata["1. Information"]}</h2>
                        <div className="title">{metadata["2. Digital Currency Code"]}|{metadata["3. Digital Currency Name"]}</div>
                        <div className="desc">Last Refreshed : <br />{metadata["6. Last Refreshed"]} | {metadata["7. Time Zone"]}</div>


                    </div>
                </div>
                <div className="col px-sm-4" style={{
                }} >
                    <div className="actions">
                        <div className="follow-info">
                            <h2><a href="#"><span>{metadata["4. Market Code"]}</span><small>Market_Code</small></a></h2>
                            <h2><a href="#"><span>{metadata["5. Market Name"]}</span><small>Market_Name</small></a></h2>
                        </div>
                    </div>
                    <div className="d-flex flex-column">
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
                    </div>

                    {this.props.err ? <span className="text-danger">DATE NOT FOUND</span> : ""}

                    <DTimePicker
                        type="start"
                        fetchStock={this.props.fetchStock} />


                    <div className="follow-btn pb-1 pt-1">

                        <button onClick={this.props.flip}>PICK & GO / GO</button>
                    </div>

                </div>





            </div >

        )
    }
}