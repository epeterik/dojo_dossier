import React, { Component } from 'react';
import { } from 'redux';
import { connect } from 'react-redux';
import {TITLE_VALUE_UPDATE, ADD_NEW_TITLE} from "./types";
import PropTypes from 'prop-types';

export class TitleEntry extends Component{

    render() {

        return (
            <div className="row">
                <div className="small-8 columns">&nbsp;</div>
                <div className="small-2 columns">
                <div className="md-text-field">
                    <input placeholder="Enter New Title Here" value={this.props.titleValue} onChange={this.props.handleUserTitleInput}/>
                </div>
                </div>
                <div className="small-2 columns"><button className="button btn-cta small" onClick={(this.props.handleUserTitleAdd)}>Add Title</button></div>
            </div>
        );
    } //end render
} //end TitleEntry

//PropTypes Checking - Make sure we get the right stuff! 
TitleEntry.propTypes = {
    titleValue: PropTypes.string,
    handleUserTitleInput: PropTypes.func,
    handleUserTitleAdd: PropTypes.func
  };

const mapStateToProps = (state) => {
    return { 
        titleValue: state.titleInput
    }
} 

const mapDispatchToProps = (dispatch) => { 
    return { 
        handleUserTitleInput(event) {
            dispatch({type: TITLE_VALUE_UPDATE, payload: event.target.value});
        },
        handleUserTitleAdd() {
            dispatch({type: ADD_NEW_TITLE});
        }
    } //end return
} // end mapDispatchToProps
 
 export default connect(mapStateToProps, mapDispatchToProps)(TitleEntry); 
