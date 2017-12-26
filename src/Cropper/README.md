# RhCropper Component Help
Example usage:
    
    
	import React from 'react';
	import{ Cropper} from 'Components';

	export class App extends React.Component {


 	 render() {
		 let crop = {
		      x: 10,
		      y: 10,
		      width: 40,
		      height: 40
	     };
		return (
			<div>
	      	  <Cropper
	          		crop={crop}
	          		returnDataUrl={(dataUrl)=>console.log('dataUrl:',dataUrl)}
	             />
			   </div>
		    );
  		}
		}

	export default App;

# Props

|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| crop          | object    |    -    | All crop values are in percentages, and are relative to the image.|
| returnDataUrl              | function  |-|return a blob file from cropper |



### crop (optional)

All crop values are in percentages, and are relative to the image. All crop params are optional.

    let crop = {
      x: 20,
      y: 10,
      width: 30,
      height: 10
    }


If you want a fixed aspect you only need to specify a width or a height:

    let crop = {
     width: 30,
     aspect: 16/9
    }

