# Collapsible Component Help
Example usage:

	import Collapsible from 'RhComponents';
	export class App extends React.Component {

	render() {
	    return (
	      <Collapsible trigger="Start here" transitionTime={400}>
	          <p>This is the collapsible content. It can be any element or React component you like.</p>
	          <p>It can even be another Collapsible component. Check out the next section!</p>
          </Collapsible>
	    );
 	 }
	}

	export default App
# Props

|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| transitionTime          | number    |   400    | The number of milliseconds for the open/close transition to take.|
| easing          | String    |   'linear'   | bThe CSS easing method you wish to apply to the open/close transition. |
| open              | boolean  |false|Set to true if you want the Collapsible to begin in the open state. You can also use this prop to manage the state from a parent component|
| classParentString              | string  |'Collapsible'|Use this to overwrite the parent CSS class for the Collapsible component parts|
|triggerDisabled              | boolean  |false|Disables the trigger handler if true. Note: this has no effect other than applying the .is-disabled CSS class if you've provided a handleTriggerClick prop. |
|lazyRender              | boolean  |false|Set this to true to postpone rendering of all of the content of the Collapsible until before it's opened for the first time |
|overflowWhenOpen              | .oneOf(['hidden','visible','auto','scroll','inherit','initial','unset']) |'hidden'|he CSS overflow property once the Collapsible is open|
|openedClassName              | string  |-|.Collapsible element (root) when open |
|triggerClassName              | string  |-|.Collapsible__trigger element (root) when closed |
|triggerOpenedClassName              | string  |-|.Collapsible__trigger element (root) when open |
|contentOuterClassName              | string  |-|Collapsible__contentOuter element |
|contentInnerClassName              | string  |-|.Collapsible__contentInner element |
|triggerSibling              | element  |-|Escape hatch to add arbitrary content on the trigger without triggering expand/collapse. It's up to you to style it as needed. This is inserted in component tree and DOM directly after .Collapsible__trigger |
|className              | string  |-|.Collapsible element (root) when closed |
|accordionPosition              | oneOfType([string,number])  |-|Unique key used to identify the Collapse instance when used in an accordion.|
|handleTriggerClick              | function |-|Define this to override the click handler for the trigger link.|
|onOpen              | function |-|Is called when the Collapsible is opening.|
|onClose              | function |-|Is called when the Collapsible is closing.|
|trigger              | .oneOfType([string, element]) |-|The text or element to appear in the trigger link|
|triggerWhenOpen              | .oneOfType([string, element]) |-|Optional trigger text or element to change to when the Collapsible is open. |




