import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Blog from "./components/Blog";
import {useContext,useEffect} from 'react';
import {AppContext} from './context/AppContext';

export default function App() {
  const{fetchBlogPosts}=useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
},[]);

  return (
  <div>
   
    {/* first i have created a header component */}
   <Header/>
   <Blog/>
   <Pagination/>
  </div>
  );
}
  