import {TITLE_VALUE_UPDATE, ITEM_VALUE_UPDATE, ADD_NEW_TITLE, ADD_NEW_ITEM, SELECTED_DOSSIER} from "./types";

//generate a unique key - copied from instructors option
const genId = (str1) => {
    const megaStr = '' + str1;
    const chars = [];
    for(let i = 0; i < megaStr.length; i++) {
     const randomVal = Math.floor(Math.random() * 3 * megaStr.charCodeAt(i));
     if (randomVal % 3 === 0) {
      chars.push(i);
     } else {
      chars.push(String.fromCharCode(randomVal));
     }
    }
    return chars.join('');
  }

class DossierElement {
    constructor (
        title
    )
    {
        this.title = title;
        this.items = []; 
        this.id = genId(title);
    }
} //end DossierElement

//set initial dossier state
const initialState = {
    titleInput: "",
    itemInput: "",
    dossierList: [],
    currentDossier: undefined
}

//reducer for dojo dossier
export const dossierReducer = (state = initialState, action) => {

    console.log("in dossierReducer"); //debug

    switch(action.type) {
        case TITLE_VALUE_UPDATE:
            console.log("reducer - TITLE_VALUE_UPDATE"); //debug
            return {...state, titleInput: action.payload};
        //break;
        case ITEM_VALUE_UPDATE: 
            console.log("reducer - ITEM_VALUE_UPDATE"); //debug
            return {...state, itemInput: action.payload};
        //break;
        case ADD_NEW_TITLE:
            console.log("reducer - ADD_NEW_TITLE"); //debug

            //add prevention of addition of blank values
            if (state.titleInput.trim() === "")
            {
                //update nothing, just return state
                return state; 
            }

            return {...state, 
                    dossierList: state.dossierList.concat(new DossierElement(state.titleInput)), 
                    titleInput: ''};
        //break;
        case ADD_NEW_ITEM:
            console.log("reducer - ADD_NEW_ITEM"); //debug

            //add prevention of addition of blank values
            if (state.itemInput.trim() === "")
            {
                //update nothing, just return state
                return state; 
            }

            //get index of currently active dossier
            let tempCurrentDossierIndex = state.dossierList.findIndex((dossierObject) => dossierObject.id === state.currentDossier ? true : false)
            //console.log(tempCurrentDossierIndex);

            //create temp array
            let tempDossierList = state.dossierList.slice();
            //console.log(tempDossierList);

            //update dossier 
            tempDossierList[tempCurrentDossierIndex].items.push(state.itemInput);

            return {...state, 
                dossierList: tempDossierList, 
                itemInput: ''};
        case SELECTED_DOSSIER:
            console.log("reducer - SELECTED_DOSSIER"); //debug
            return {...state, currentDossier: action.payload}
        //break;
        default: //should always have - code first - should always return current state
            console.log("reducer - default"); //debug
            return state;

    }//end switch
}// end dossierReducer

