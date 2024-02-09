 const api_base_url = 'http://localhost:8080'
//const api_base_url = 'https://inventorymanagement-render.onrender.com'
export const api_endpoints = {
    //tool
    allTools : `${api_base_url}/allTools`,
    deleteTool : `${api_base_url}/deleteTool`,
    addTool : `${api_base_url}/addTool`,
    updateToolList : `${api_base_url}/updateToolList`,

    //site
    addSite : `${api_base_url}/addSite`,
    addExtraTool : `${api_base_url}/addExtraTool`,
    decreaseToolNumber : `${api_base_url}/decreaseToolNumber`,
    receiveTools : `${api_base_url}/receiveTools`,
    siteDetails : `${api_base_url}/siteDetails`,
    removeTool :   `${api_base_url}/removeTool`,
    sendTools :    `${api_base_url}/sendTools`,
    siteHistoryList : `${api_base_url}/getHistory`,
    deleteSiteHistory: `${api_base_url}/deleteSiteHistory`,
    allSites : `${api_base_url}/allSites`,
    deleteSite : `${api_base_url}/deleteSite`,
    moveToHistory : `${api_base_url}/moveToHistory`,
    updateSite :   `${api_base_url}/updateSite`,
    Login : `${api_base_url}/login`,
};