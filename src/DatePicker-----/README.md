# RhPersianDatePicker Component Help
Example usage:

	import RhPersianDatePicker from 'RhComponents';
	export class App extends React.Component {
		 state = {
		    value: moment(),
		    someValue: new moment()
		  };
	render() {
	    return (
			<div>
			  <h1>ورودی تاریخ ساده</h1>
              <RhPersianDatePicker/>
 			  <h1>ورود تاریخ کنترل شده</h1>    
              <DatePicker
                value={this.state.someValue}
                onChange={value => this.setState({ someValue: value })}
              />
              <div style={{ paddingTop: 15 }}>
                <button onClick={() => this.setState({ someValue: null }) }>
                  حذف مقدار
                </button>
              </div>

			</div>
	    );
 	 }
	}

	export default App



**This component uses [moment-jalaali](https://github.com/jalaali/moment-jalaali) under the hood and all the values are basically moment objects.**

# Props

|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| value          | object    |   -    | -|
| defaultValue          | object    | - | -|
| children              | object  |-|-|
| onChange              | string  |-|-|
|min              | object  |-| - |
|max              | object  |-|-|
|inputFormat              | string |'jYYYY/jM/jD'|-|
|timePickerComponent              | func  |-|-|
|calendarStyles              | object  |-|-|
|calendarContainerProps              | object  |{}|-|





