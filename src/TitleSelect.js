import React, { Component } from 'react';
import { } from 'redux';
import { connect } from 'react-redux';
import {SELECTED_DOSSIER} from "./types";
import PropTypes from 'prop-types';

export class TitleSelect extends Component {


    mapTabHeaders(dossierObject, arrayIndex)
    {
        //console.log("in mapTabheaders");
        //console.log(this.props);

        return (
            <li key={"tabHeader" + arrayIndex} className={"heading-nav-entry" + (this.props.selectedDossier === dossierObject.id ? " active" : "")} >
                <button onClick={() => this.props.handleDossierSelected(dossierObject.id)}>{dossierObject.title}</button>
            </li>
        )
    }

    render() {
        //console.log(this.props);
        return (
            <ul className="heading-nav padding-bottom-medium">
                {this.props.dossierList.map(this.mapTabHeaders.bind(this))}
            </ul>
        );
    } //end render

} //end TitleSelect

//PropTypes Checking - Make sure we get the right stuff! 
TitleSelect.propTypes = {
    selectedDossier: PropTypes.string,
    handleDossierSelected: PropTypes.func,
    dossierList: PropTypes.arrayOf(PropTypes.object)
  };

const mapStateToProps = (state) => {
    return { 
        dossierList: state.dossierList,
        selectedDossier: state.currentDossier
    }
} 

const mapDispatchToProps = (dispatch) => { 
    return { 
        handleDossierSelected(dossierId) {
            dispatch({type: SELECTED_DOSSIER, payload: dossierId});
        }
    } //end return
} // end mapDispatchToProps
 
 export default connect(mapStateToProps, mapDispatchToProps)(TitleSelect); 
