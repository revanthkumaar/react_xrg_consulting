import React from "react";
import MenuItem from "../menu-item/menu-item.component"

class Directory extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          categories: [
            {
              name: "dairy",
              id: 1,
              linkUrl: "/dairy",
            },
            {
              name: "veggies",
              id: 2,
              linkUrl: "/veggies",
            },
            {
              name: "fruits",
              id: 3,
              linkUrl: "/fruits",
            },
          ],
        };
    }

    render() {
        return( <div className="directory-component">
            <p>this is directory</p>
            {
                this.state.categories.map(category =>(
                    <MenuItem/>
                ))
            }
        </div>)
    }

}


export default Directory;
