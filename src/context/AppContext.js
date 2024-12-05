
import {createContext,useState} from "react"; 
import {baseUrl} from "../baseUrl";

export  const AppContext = createContext();
// children appcontextprovider sai aya osme chilldren app pada hai
// children app wala component hai
// step 1
export default function AppContextProvider({children}){
    const[loading,setLoading]=useState('false');
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);

    // data pending feeling 
  // default value page=1
    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;

        
        try{
        const result= await fetch(url);
        const data=await result.json();
        console.log(data);
        setPage(data.page);
        setPosts(data.posts);
        setTotalPages(data.totalPages)
        }
        catch(error){
                console.log("Error");
                setPage(1);
                setPosts([]);
                setTotalPages(null);
               
        }
        setLoading(false);
    }

   
// snap shot of data here function method post all are present
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages
    };
 


    //step 2
    return <AppContext.Provider value={value}>
       {/* children(app) ko value provide kar diya hai jo ki appcontext mai exist karti hai   */}
        {children}
        </AppContext.Provider>
}