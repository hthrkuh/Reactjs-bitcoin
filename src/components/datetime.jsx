import React from 'react';
import { RangeDatePicker } from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';
export default class DTimePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(), endDate: new Date(),
      err: false
    }

  }
  range = (da) => {
    let e
    if (da[0] && da[1]) {
      function pad(s) { return (s < 10) ? '0' + s : s; }
      e = da.map((d) => [d?.getFullYear(), pad(d?.getMonth() + 1), pad(d?.getDate())].join('-'))
      if (e[0] && e[1]) {
        this.setState((state) => ({ range: da }))
        this.props.fetchStock(e)
      }

    }

  }


  render() {
    return (
      <div>
        <RangeDatePicker
          closeOnSelect={true}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={(e, s) => this.range([e, s])}
          maxDate={new Date()}
          className=" my-own-class-name"
          startWeekDay="sunday"
          singleCalendar={true}
          startDatePlaceholder="From"
          endDatePlaceholder="To"
          highlightToday
        />
      </div>
    );
  }

}