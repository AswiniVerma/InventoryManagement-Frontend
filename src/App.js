import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddTool from './componets/AddTool';
import './App.css';
import ToolList from './componets/ToolList';
import Home from './componets/Home';
import Navigation from './componets/Navigation';
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
import Navbar from './componets/Navbar';
import UpdateToolList from './componets/UpdateToolList';

const router = createBrowserRouter(
  [
    {path:'/', element:<Home/>},
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
     {path:'/updateToolList/:id/:name/:originalquantity/:curquantity', element:<UpdateToolList/>}

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
