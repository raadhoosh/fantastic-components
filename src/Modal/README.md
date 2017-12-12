#Modal Component Help
Example usage:
    
	import React from "react";
	import {Modal, Button} from "../../RhComponents";

	export class App extends React.Component {
  	constructor(props, context) {
	    super(props, context);
	    this.state = {
	      isOpen: false
	    };
	    this.openModal = this.openModal.bind(this);
	    this.closeModal = this.closeModal.bind(this);
  	}

	  openModal ()  {
	    this.setState({
	      isOpen: true
	    });
	  }

	  closeModal ()  {
	    this.setState({
	      isOpen: false
	    });
	  }
 	 render() {
  	  return (
        <div>
          <Modal isOpen={this.state.isOpen}
                   onClose={() => this.closeModal()}
                   title="title"
                   iconTitle="fa fa-envelope"
                   Btn1Label="yes"
                   Btn1action={this.closeModal}
                   Btn1Type="Primary"
                   Btn2Label="No"
                   Btn2action={this.closeModal}
                   Btn2Type="Danger"
                   Btn3Label="info"
                   Btn3action={this.closeModal}
                   allowClose={true}
                   footerChildren={<div><b>footer</b></div>}
                   BtnHelpAction={this.closeModal}

          >
       	  this is body of modal
          </Modal>
	      <Button label="open modal"
	                  onClick={this.openModal}
	                  bType="Info"
	                  bSize="large"
	        />
    	  </div>
   	 );
 	 }
	}

	export default App
# Props

|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| onClose          | function    |    -    | Function to call to close the dialog|
| allowClose          | boolean    |    -    | Boolean value to support closing of dialog on clicking outside the dialog|
| title           | string |-| Title of the dialog|
| iconTitle           | string |-| icon Title of the dialog|
| width          | string |-| The Width of Dialog,
| height              | String  |-|The height of Dialog,  |
| isOpen              | bool  |false|-|
| Style              | Object  |-|Override the inline-styles|
| Btn1Label              | string  |-|Text to display inside the button1|
| Btn1action              | function  |-|function to be called when the button1 is clicked.|
| Btn1Type              | string  |-|Text to display type of button1(Primary,Danger,info,Warning,Link,success,Default)|
| Btn2Label              | string  |-|Text to display inside the button2|
| Btn2action              | function  |-|function to be called when the button2 is clicked.|
| Btn2Type              | string  |-|Text to display type of button(Primary,Danger,info,Warning,Link,success,Default)|
| Btn3Label              | string  |-|Text to display inside the button3|
| Btn3action              | function  |-|function to be called when the button3 is clicked.|
| Btn3Type              | string  |-|Text to display type of button(Primary,Danger,info,Warning,Link,success,Default)|



