#Button Component Help
Example usage:
    
    import{RhButton} from 'RhComponents';
    onClick(){}
      <Button label="Login"
     			 primary
     			 onClick={this.onClick.bind(this)}
    />

## Props

|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| label          | String    |    -    | String    Text to display inside the button|
| onClick           | function |-| function to be called when the button is clicked.|
| className              | String  |-|Class name for the button. (default: .btn). |
| style              | Object  |-|Styles are passed as an object |
| id              | String  |-|The id of the button. |
| value              | String  |-|The value of the button. |
| icon              | String  |-|The name of icon from Awsome Font icon set |
| spinner              | boolean  |-|The button shows an spinner insted of icon and will be disabled while it's **true** |



## Styling Props

Use these props for styling.

__One of each item can be used at the same time__

|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| primary , secondary , info , warning , danger , success , reverse   | boolean    |    default theme color    | shows the button with theme selected colors|
| xSmall , small , large  | boolean    |    default theme size    | resize the button|
| foreColor  | boolean    |    -    | changes color of the text and icon|
| borderColor  | boolean    |    -    | changes the color of border|
| bgColor  | boolean    |    -    | changes the background color|
| hover  | boolean    |    -    | changes the hover color a little lighter or darker than the bgColor|

