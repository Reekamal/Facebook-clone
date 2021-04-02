 import './App.css';
 import Header from './Header'
 import Sidebar from './Sidebar'
 import Feed from './Feed'
 import Widgets from './Widgets'
 import Login from './Login'
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue();

  return (
    
    <div className="app"> {/*header */}
  {!user ? <Login/> : ( // if there is no user then login otherwise render
      <> {/* we have to wrap in js fragment or a div */}
       <Header/>
       <div className="app__body">
         <Sidebar/>
         <Feed/>
         <Widgets/>
       </div>
       </>
)}
   
       </div>
  );
}
 
export default App;
