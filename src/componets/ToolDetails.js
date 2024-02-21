import React, { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { api_endpoints } from "./api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Navbar from "./Navbar";

const ToolDetails = () => {

  const pdfRef = useRef();
  const [product, setProduct] = useState({
    name: "",
    originalQuantity: "",
    curQuantity: "",
    sitetoolCount: "",
    lost: "",
    damaged: "",
    unrepair: "",
  });

  const { toolName } = useParams();

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get(`${api_endpoints.toolDetails}/${toolName}`);
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
    <div className="text-center">
      <Navbar/>
    <div className=" text-xl" id="site-details-content" ref={pdfRef}>
      <h1 className="text-4xl px-6 flex font-bold flex justify-center"> Rights Power</h1>
      <h2 className="text-3xl px-6 font-bold flex justify-center ">Tool Details</h2>
      <table className="mx-6">
        <thead>
            <tr>
                <td className="font-bold bg-customBlue text-white">Name</td>
                <td className="font-bold bg-customBlue text-white">Original Quantity</td>
                <td className="font-bold bg-customBlue text-white">Current Quantity</td>
                <td className="font-bold bg-customBlue text-white">Tools at Site</td>
                <td className="font-bold bg-customBlue text-white">Lost</td>
                <td className="font-bold bg-customBlue text-white">Damaged</td>
                <td className="font-bold bg-customBlue text-white">Unrepairable</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{product.name}</td>
                <td>{product.originalQuantity}</td>
                <td>{product.curQuantity}</td>
                <td>{product.sitetoolCount}</td>
                <td>{product.lost}</td>
                <td>{product.damaged}</td>
                <td>{product.unrepair}</td>
            </tr>
        </tbody>
      </table>
      
    
      
       
          <h1 className="justify-center">-----x-----</h1>
    </div>
    <button className="button flex justify-center" onClick={downloadPDF}> Download PDF</button>
    </div>
  );
}

export default ToolDetails;
