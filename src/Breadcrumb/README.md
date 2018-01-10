# RhBreadcrumb Component Help
Example usage:

```
    import React, {Component, PropTypes} from 'react';
    import {RhBreadcrumb,} from 'RhComponents';
    export class CategoryPage extends Component {
	  render () {
	  let items = [
	  {
	     name: "Home",
	     path: "/"
	   },
	    {
     	     name: "Contact",
     	     path: "/contact"
     	  },
     	     {
         	     name: "About",
         	     path: "/about"
         	   }
             
          ];
          return(
            <div>
               <RhBreadcrumb items={items}/>
            </div>
            );
		}
	}
```
# Props
|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| items          | array    |    -    | array of objects|
| className              | String  |''|The className for the root element. |
| style              | Object  | {} |The inline-styles for the root element. |
| rtl              | Boolean  |false|rtl is true component show  in right side of the window, default is false (from left side). |
| primary              | Boolean  |false|Boolean indicating whether the component renders with Theme.primary color|
| secondary              | Boolean  |false|Boolean indicating whether the component renders with Theme.secondary color |
| info              | Boolean  |false|Boolean indicating whether the component renders with Theme.info color |
| warning              | Boolean  |false|Boolean indicating whether the component renders with Theme.warning color |
| danger              | Boolean  |false|Boolean indicating whether the component renders with Theme.danger color |
| success              | Boolean  |false|Boolean indicating whether the component renders with Theme.success color |
| foreColor              | Boolean  |false| The color renders with Theme.foreColor .  |



