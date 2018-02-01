import React, { Component } from 'react';
import { } from 'redux';
import { connect } from 'react-redux';
import {ITEM_VALUE_UPDATE, ADD_NEW_ITEM} from "./types";
import PropTypes from 'prop-types';

export class ItemArea extends Component {


    mapDossierItems(dossierItem, arrayIndex)
    {
        return (
            <li key={"dossierItemList" + arrayIndex} >{dossierItem}</li>
        )
    }

    findDossierIndex(dossierObject)
    {
        if (dossierObject.id === this.props.selectedDossier)
            return true;
        else
            return false;
    }

    render() {
        console.log(this.props);

        let currentDossierToDisplay = "";

        if (this.props.selectedDossier !== undefined)
        {
            let currentDossierIndex = this.props.dossierList.findIndex(this.findDossierIndex.bind(this));
            //console.log(currentDossierIndex); //debug
            let currentDossier = this.props.dossierList[currentDossierIndex]
            //console.log(currentDossier); //debug
            currentDossierToDisplay = currentDossier.items.length > 0 ?
                <ul>
                    {currentDossier.items.map(this.mapDossierItems)}
                </ul>
                : 
                <div className="notification-box info padding-none" style={{width: "400px"}}>
                    No items available, you can enter some items in the item entry box in the lower right.
                </div>        

        return (
            
            <div className="card padding-none">
            <div className="row padding-horiz-medium">
                <div className="columns small-12 padding-top-medium" style={{width: "600px"}}>                
                    {currentDossierToDisplay}
                </div>
                <div className="row">
                  <div className="small-8 columns">&nbsp;</div>
                  <div className="small-2 columns">
                    <div className="md-text-field">
                      <input placeholder="Enter New Item Here" value={this.props.itemValue} onChange={this.props.handleUserItemInput} />
                    </div>
                  </div>
                  <div className="small-2 columns"><button className="button btn-cta small" onClick={this.props.handleUserItemAdd}>Add Item</button></div>
                </div>
            </div>
        </div>
        ); //end return

    }
    else
    {
        if (this.props.dossierList.length > 0)
        {
            return (
                <div className="card padding-none">Select a title to see related items.</div>
            );
        }
        else
        {
            return (
                <div className="card padding-none">Please enter a title in the title input box.</div>
            );
        }
    }

    } //end render

} //end ItemArea

//PropTypes Checking - Make sure we get the right stuff! 
ItemArea.propTypes = {
    selectedDossier: PropTypes.string,
    itemValue: PropTypes.string,
    dossierList: PropTypes.arrayOf(PropTypes.object),
    handleUserItemInput: PropTypes.func,
    handleUserItemAdd: PropTypes.func
  };

const mapStateToProps = (state) => {
    return { 
        itemValue: state.itemInput,
        selectedDossier: state.currentDossier,
        dossierList: state.dossierList
    }
} 

const mapDispatchToProps = (dispatch) => { 
    return { 
        handleUserItemInput(event) {
            dispatch({type: ITEM_VALUE_UPDATE, payload: event.target.value});
        },
        handleUserItemAdd() {
            dispatch({type: ADD_NEW_ITEM});
        }
    } //end return
} // end mapDispatchToProps
 
 export default connect(mapStateToProps, mapDispatchToProps)(ItemArea); 
