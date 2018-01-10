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
| className              | String  |''|The className for the root element. |
| style              | Object  | {} |The inline-styles for the root element. |
| value              | String  |-|The value of the button. |
| icon              | String  |-|The name of icon from Awsome Font icon set |
| spinner              | boolean  |-|The button shows an spinner insted of icon and will be disabled while it's **true** |
| primary              | Boolean  |false|Boolean indicating whether the component renders with Theme.primary color|
| secondary              | Boolean  |false|Boolean indicating whether the component renders with Theme.secondary color |
| info              | Boolean  |false|Boolean indicating whether the component renders with Theme.info color |
| warning              | Boolean  |false|Boolean indicating whether the component renders with Theme.warning color |
| danger              | Boolean  |false|Boolean indicating whether the component renders with Theme.danger color |
| success              | Boolean  |false|Boolean indicating whether the component renders with Theme.success color |
| foreColor              | Boolean  |false| The color renders with Theme.foreColor .  |
| xSmall , small , large  | boolean    |    default theme size    | resize the button|



