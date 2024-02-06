import { createContext, useContext, useReducer } from 'react'


const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    'user': null,
    'token':null,
}

const authReducer =(state, action)=>{
    switch(action.type){
        case'LOGIN':
        return{
            ...state,
            isAuthenticated:true,
            user: action.payload.user,
            token: action.payload.token
        };
        case 'LOGOUT':
            return{
                initialState,
            };
        default:
            return state;
    }
}

export const AuthProvider = ({children}) =>{
    const [state, dispatch] = useReducer(authReducer,initialState );

    const login = (user, token)=>{
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);

        dispatch({type: 'LOGIN', payload:{user, token}});
    }
    const logout = () =>{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        dispatch({type: 'LOGOUT'})
    }

    return (
        <AuthContext.Provider value={{...state, login, logout}}>
            {children}
        </AuthContext.Provider>
     )
}

export const useAuth =()=>{
    return useContext(AuthContext);
}