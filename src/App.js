import 'antd/dist/antd.css';
import './App.css';
import {Menu} from "antd" ;
import {Routes,Route, useNavigate} from "react-router-dom";
import {HomeOutlined, DashboardOutlined, UnorderedListOutlined, UserOutlined, PoweroffOutlined} from "@ant-design/icons/lib/icons"
// import { Footer, Header } from 'antd/lib/layout/layout';

function App() {
  return (
    <div style={{display:"flex", flexDirection:"column", flex: 1, height: "100vh"}}>
    <Header />
    <div style={{display:"flex", flexDirection:"row", flex: 1}}>
      <SideMenu />
      <Content />
     </div>
     <Footer />
     </div>

  );    
}
function Header(){
  return (
  <div style={{
       height:60, 
       backgroundColor:"lightskyblue",
       color:"white",
       fontSize: 30,
       fontWeight: 700,
       display:"flex",
       justifyContent:"center",
       alignContent:"center",
       letterSpacing:2, 
       textTransform:"uppercase" }}>
     Header
    </div>
  );
}
function Footer(){
  return (
  <div style={{
    height:60, 
    backgroundColor:"lightgray",
    color:"black",
    fontSize: 32,
    fontWeight: 700,
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
    letterSpacing:2, 
    textTransform:"uppercase" }}>
  Footer
  </div>
  );
}

function SideMenu() {
  const navigate = useNavigate();

  return (
     
  <Menu 
  onClick={({key}) => {
   if(key === "signout"){
    //TODO, sign put feature here
  }else{
    navigate(key)
   }
  }}
  defaultSelectedKeys={[window.location.pathname]}
  items={[
    {label: "Home",
       key:"/", 
     icon:<HomeOutlined />},

    {label: "Dashboard",
       key:"/dashboard", 
      icon: <DashboardOutlined />},

    {label: "Users List",
       key:"/usersList",
      icon: <UnorderedListOutlined/>,
     children:[
     {label:'Active Users',
    key: "/activeUsers"},
    {label: 'Disabled users',
     key: "/disabledUsers"}
     ]
    },
      
    {label: "Profile",
       key:"/profile", 
      icon: < UserOutlined/>},

    {label: "Signout",
       key:"/signout", 
      icon: <PoweroffOutlined />,
    danger: true },
  ]}>
  </Menu>
  );
}
function Home(){
return <div>Home Component</div>
}
function Content() {
  return ( 
  <div> 
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/dashboard' element={<div>Dashboard</div>}></Route>
    <Route path='/activeUsers' element={<div>Active Users List</div>}></Route>
    <Route path='/disabledUsers' element={<div>Disabled Users List</div>}></Route>
    <Route path='/profile' element={<div>Profile</div>}></Route>
    <Route path='/signout' element={<div>Signout</div>}></Route>
    </Routes>
  </div>
);
}


export default App;
