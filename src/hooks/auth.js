import { useState, useEffect, createContext, useContext} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Create the AuthContext
const AuthContext = createContext();
const userAdminContext = createContext();

const AdminProvider = ({children}) => {
  const [isUserAdmin, setUserAdmin] = useState(false)
  const navigate = useNavigate()

  const checkUserAdminRequest= async()=> {

    try{

        const token = localStorage.getItem('token');

        if(!token){
            return navigate("/signin")
        }
  
        await axios({
            method: 'get',
            url: "http://localhost:8000/is-admin/",
            headers: {"authorization" : `Bearer ${token}`},
        })

        setUserAdmin(true)

    } catch (error) {
        console.log(error)
        alert("You should be admin to access this panel")
        navigate("/")
    }
  }

  useEffect( ()=> {
      checkUserAdminRequest()
  },[])

  return (
    <userAdminContext.Provider value={{isUserAdmin,setUserAdmin}}>
      {children}
    </userAdminContext.Provider>
  )
}

// Create the AuthProvider component
const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status from your storage mechanism (e.g., localStorage)
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set the authentication status based on the presence of the token
  }, []);

  // Pass the authentication state and functions down to the child components
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};



const useAuth = (route) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  const { setIsAuthenticated } = useContext(AuthContext);

  const authenticateUser = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      // Send a POST request to the authentication API endpoint
      const response = await axios.post('http://localhost:8000/users/'+route, {
        email,
        password,
      });

      // Store the JWT token in local storage or a state management solution
      const token = response.data.token;
      // Store the token in local storage
      localStorage.setItem('token', token);
      
      // TODO: You can also store additional user information if needed
      setLoading(false);
      alert("Logged in successfully")
      setIsAuthenticated(true)
      navigate('/');
    } catch (error) {
      setError(error.response.data.Message);
      setLoading(false);
    }
  };


  return { loading, error, authenticateUser };
};





function useSignOut() {
  const signOut = () => {
    // Remove the token from storage (e.g., local storage or session storage)
    localStorage.removeItem('token');
    // Perform any other cleanup or logout actions
    // ...
  };

  useEffect(() => {
    // No cleanup is needed for this effect
  }, []);

  return { signOut };
}


export {useAuth, useSignOut, AuthContext, AuthProvider,AdminProvider ,userAdminContext}
