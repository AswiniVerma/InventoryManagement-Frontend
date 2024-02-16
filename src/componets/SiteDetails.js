import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { api_endpoints } from "./api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Navbar from "./Navbar";

const SiteDetails = () => {

  const pdfRef = useRef();
  const [product, setProduct] = useState({
    name: "",
    address: "",
    supervisor: "",
    toolDetails: [{ toolName: '', toolQuantity: '' }]
  });

  const { id } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`${api_endpoints.siteDetails}/${id}`);
    setProduct(result.data);
  }

  const downloadPDF =() =>{
    const input = pdfRef.current;
    html2canvas(input).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
      const imgX = (pdfWidth-imgWidth*ratio)/2;
      const imgY = 30;
      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
      pdf.save(`SiteDetails: ${product.name}.pdf`);
    })
  }

  return (
    <div className="">
      <Navbar/>
    <div className=" text-xl" id="site-details-content" ref={pdfRef}>
      <h1 className="text-4xl px-6 flex font bold"> Rights Power</h1>
      <h2 className="text-2xl px-6 font-bold ">Site Details</h2>
      <p className="px-6"><strong>Name:</strong> {product.name}</p>
      <p className="px-6"><strong>Address:</strong> {product.address}</p>
      <p className="px-6"><strong>Supervisor:</strong> {product.supervisor}</p>
    
      <h3 className="font-bold px-6">Tool Details:</h3>
      
        <table className="mx-6">
          <thead>
            <tr>
              <th>SNo:</th>
              <th>Name</th>
              <th>Quantity</th>
            </tr>
           
          </thead>
          <tbody>
            {product.toolDetails.map((tool, index) => (
          
          <tr key={index}>
            
            <td>{index}</td>
            <td>{tool.toolName} </td> 
            <td> {tool.toolQuantity}</td>
         
        </tr>  
        ))}
          </tbody>
        </table>
       
          <h1 className="justify-center">-----x-----</h1>
    </div>
    <button className="button justify-center" onClick={downloadPDF}> Download PDF</button>
    </div>
  );
}

export default SiteDetails;
