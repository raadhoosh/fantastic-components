# RhMenu Component Help
Example usage:

	import RhMenu from 'RhComponents';
	export class App extends React.Component {

	render() {
	    let mainItems = [
        {
          link: '/home',
          title: 'home',
          subItems: []
        },
        {
          link: '/about',
          title: 'about',
          subItems: [
            {
              link: '/home',
              title: 'ccc'
            }
          ]
        },
        {
          link: '/contact',
          title: 'contact',
          subItems: [
            {
              link: '/home',
              title: 'ccc'
            },
            {
              link: '/home',
              title: 'ccc'
            },
            {
              link: '/home',
              title: 'ccc'
            }
          ]
        }
      ];
	    return (
	          <RhMenu
                 mainItems={mainItems}
               />
	    );
 	 }
	}

	export default App
# Props

|  Name             |  Type    |  Default |  Description |
|:------            |:------   |:---------|:-------------|
| mainItems          | array    |  -   | array of object{link,title,subItems}|





