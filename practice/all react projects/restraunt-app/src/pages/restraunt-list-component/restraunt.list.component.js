import React, {Component} from "react";
import SingleRestraunt from "../../child-components/single-restraunt-component/singlerestraunt.component.jsx";

class RestrauntList extends Component {
  constructor(){
    super();
    
    this.listOfRestraunts = [
    { name: "paradise", place: "hitech city" },
    { name: "shah ghouse", place: "gachibowli" },
    {name: "club rogue ", place: "kondapur"}
  ];
  }
  render(){

      return (
        <div className="restraunt-list-component">
          <p>this is restraunt list component</p>
          <SingleRestraunt abc='123' listofplaces={this.listOfRestraunts} />
        </div>
      );

  }

};

export default RestrauntList;
