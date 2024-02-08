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
    <div className="text-center ">
      <Navbar/>
    <div className="text-center text-3xl" id="site-details-content" ref={pdfRef}>
      <h1 className="text-4xl flex justify-center font bold"> Rights Power</h1>
      <h2 className="text-3xl  flex justify-center font-bold ">Site Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Address:</strong> {product.address}</p>
      <p><strong>Supervisor:</strong> {product.supervisor}</p>
    <br />
    <br />
      <h3 className="font-bold">Tool Details:</h3>
      <ul>
        {product.toolDetails.map((tool, index) => (
          <li key={index}>
            <p><strong>Tool Name:</strong> {tool.toolName}</p>
            <p><strong>Tool Quantity:</strong> {tool.toolQuantity}</p>
          </li>
        ))}
      </ul>
          <h1 className="text-center">Thankyou!</h1>
    </div>
    <button className="button" onClick={downloadPDF}> Download PDF</button>
    </div>
  );
}

export default SiteDetails;
