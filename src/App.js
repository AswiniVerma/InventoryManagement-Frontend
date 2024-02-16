import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ToolList from './componets/ToolList';
import Home from './componets/Home';
import SiteList from './componets/SiteList';
import SendTools from './componets/SendTools';
import ReceiveTools from './componets/ReceiveTools';
import SiteHistoryList from './componets/SiteHistoryList';
import AddExtraTool from './componets/AddExtraTool';
import RemoveTool from './componets/RemoveTool';
import AddSite from './componets/AddSite';
import IncreaseNoOfTools from './componets/IncreaseNoOfTools';
import DecreaseNoOfTools from './componets/DecreaseNoOfTools';
import SiteDetails from './componets/SiteDetails';
import UpdateSite from './componets/UpdateSite';
import UpdateToolList from './componets/UpdateToolList';
import Login from './componets/Login';
import AddLostTool from './componets/AddLostTool';
import LostToolList from './componets/LostToolList';
import AddDamagedTool from './componets/AddDamagedTool';
import AddPermanentDamagedTool from './componets/AddPermanentDamagedTool';
import DamagedToolList from './componets/DamagedToolList';
import PermanentDamagedToolList from './componets/PermanentDamageToolList';
import ToolDetails from './componets/ToolDetails';
import ToolFound from './componets/ToolFound';
import ToolRepaired from './componets/ToolRepaired';

const router = createBrowserRouter(
  [ 
    {path:'/' , element:<Login/>},
    {path:'/Home', element:<Home/>},
     {path:'/allTools', element:<ToolList/>},
     {path:'/allSite', element:<SiteList/>},
     {path:'/addSite', element:<AddSite/>},
     {path:'/sendTools', element:<SendTools/>},
     {path:'/receiveTools', element:<ReceiveTools/>},
     {path:'/siteHistory', element:<SiteHistoryList/>},
     {path:'/addExtraTool/:siteName', element:<AddExtraTool/>},
     {path:'/addExtraTool/:siteName/:toolName', element:<IncreaseNoOfTools/>},
     {path:'/decreaseToolNumber/:siteName/:toolName', element:<DecreaseNoOfTools/>},
     {path:'/removeTool/:siteName', element:<RemoveTool/>},
     {path:'/siteHistory', element: <SiteHistoryList/>},
     {path:'/siteDetails/:id', element:<SiteDetails/>},
     {path:'/updateSite/:id/:siteName/:address/:supervisor', element:<UpdateSite/>},
     {path:'/receiveTools/:id', element:<ReceiveTools/>},
     {path:'/updateToolList/:id/:name/:originalquantity/:curquantity', element:<UpdateToolList/>},
     {path:'/lostTool/:name/:quantity/:siteName', element:<AddLostTool/>},
     {path: '/getAllLostTool', element:<LostToolList/>},
      {path:'/damagedTool/:name/:quantity/:siteName', element:<AddDamagedTool/>},
     {path: '/getAllDamagedTool', element:<DamagedToolList/>},
       {path:'/permanentDamagedTool/:name/:quantity/:siteName', element:<AddPermanentDamagedTool/>},
      {path: '/getAllPermanentDamagedTool', element:<PermanentDamagedToolList/>},
      {path:'/toolDetails/:toolName', element:<ToolDetails/>},
      {path:'/toolFound/:id/:name/:quantity', element:<ToolFound/>},
      {path:'/toolRepaired/:id/:name/:quantity', element:<ToolRepaired/>}

  ]
)
function App() {
  return (
    <div>
      
      <RouterProvider router={router}/>
      
    </div>
   
   
  );
}

export default App;
