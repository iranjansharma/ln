"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

import Table from "@/components/table";
import React from "react";
import Button from "@/components/button";

const Page = () => {
  // ✅ Capitalized
  const tableRef = useRef<HTMLDivElement | null>(null);

  const exportPDF = async () => {
    if (!tableRef.current) return; // ✅ Prevent null reference
    const element = tableRef.current;

    // Capture table as canvas
    const canvas = await html2canvas(element, {
      backgroundColor: "#111827",
      scale: 2,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const imgProps = pdf.getImageProperties(imgData);
    const imgHeight = (imgProps.height * pageWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
    pdf.save("table-report.pdf");
  };

  return (
    <div className="container h-screen mx-auto md:py-20 lg:py-40 relative z-10 text-white">
      <div className="flex justify-center items-end">
        <span className="font-bold">
          Below This Need Form To add And Made POST Request To TABLE API
        </span>
      </div>
      <Table ref={tableRef} />
      <Button
        variant="outline"
        onClick={exportPDF}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Pdf
      </Button>
    </div>
  );
};

export default Page; // ✅ Export correct component
