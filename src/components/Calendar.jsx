import React from 'react';
import dateFns from 'date-fns';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Detail from './Detail';

class Calendar extends React.Component {
  state = {
    currentMonth: new Date(),
    selectedDate: new Date()
  }

  renderHeader() {
    const dateFormat = 'MMMM YYYY';

    return(
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={this.previousMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>
            {dateFns.format(this.state.currentMonth, dateFormat)}
          </span>
        </div>
        <div className="col col-end">
          <div className="icon" onClick={this.nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    )
  }
  renderDays() {
    const dateFormat = 'dddd';
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for(let i = 0; i < 7; i++){
      days.push(
        <Link to={"/topics"}>
          <div className="col col-center">
            fack {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
          </div>
        </Link>     
      )
    }
  }
  renderCells() {
    const {currentMonth, selectedDate} = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = 'D';
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = '';

    while(day <= endDate){
      for(let i = 0; i < 7; i++){
        formattedDate = dateFns.format(day, dateFormat)
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${!dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, selectedDate)
                ? "selected"
                : ""
              }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
                    <Link to={'/topicz'}>

              <span className="number">{formattedDate}</span>
              <span className="bg">{formattedDate}</span>
              </Link>

          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>{days}</div>
      );
      days = [];
    }
    <Route path={`/topicz`} component={Detail}/>

    return <div className="body">{rows}</div>;

  }

  onDateClick = date => {
    this.setState({
      selectedDate: date
    });
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    })
  };

  previousMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    })
  };

  render(){
    return(
      <Router>
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
      </Router>
    )
  }
}

export default Calendar;
