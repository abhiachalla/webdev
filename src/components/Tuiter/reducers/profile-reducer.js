import owner from '../data/profile.json'
const initialState = {
    profile: owner
};

const tempFunc = (state,newInput)=> {
    
    return state;
}


 


const profile = (state = initialState, action) =>{
            console.log("Act type: "+ action.type)
             console.log("Act inputs: " + action.profileData)
         
    switch(action.type){
        case 'fetch-profile':
            
            return({
                state
            })

        case 'save':

        console.log(action.profileData)
          return state;
          
          
        default:
            return (state)
                    
                     
                
    }
}

export default profile;
