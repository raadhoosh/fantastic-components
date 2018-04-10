# RhImage Component Help
Example usage:
    
    import{Img} from 'RHSC';
	let style={
	backGroundColore:'red',
	...
	}
      <RhImage alt="RhImage"
     			 src="./src/images/logo.png"
     			 ImageType="rounded"
     			 style={style}
    />

# Props
|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| src          | String    |    -    | The image source (either a remote URL or a local file resource).|
| ImageType           | string |-|Type of image(rounded,circle,thumbnail)|
| style              | Object  |-|Styles are passed as an object |

## Styling Props

Use these props for styling.

__One of each item can be used at the same time__

|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| primary , secondary , info , warning , danger , success , reverse   | boolean    |    default theme color    | shows the button with theme selected colors|

| borderColor  | boolean    |    -    | changes the color of border|
| bgColor  | boolean    |    -    | changes the background color|


