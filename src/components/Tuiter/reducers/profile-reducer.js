import owner from '../data/profile.json'
const initialState = {
    profile: owner
};


const profile = (state = initialState, action) =>{
            console.log("Act type: "+ action.type)
             console.log("Act input: " + action.newInput)
         
    switch(action.type){
        case 'fetch-profile':
            return({
                    profile: action.profile
                })
        default:
            return (state)
                    
                     
                
    }
}

export default profile;
