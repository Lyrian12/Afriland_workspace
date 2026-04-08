import { jsPDF } from "jspdf";

export const generateRecordingPDF = (rec: { title: string; transcription: string | null; createdAt: Date | string }) => {
  const doc = new jsPDF();
  const splitText = doc.splitTextToSize(rec.transcription || "Pas de transcription", 180);
  
  // Header
  doc.setFontSize(20);
  doc.text(rec.title, 10, 20);
  
  // Date
  doc.setFontSize(12);
  doc.text(`Date: ${new Date(rec.createdAt).toLocaleDateString("fr-FR")}`, 10, 30);
  
  // Separation line
  doc.line(10, 35, 200, 35);
  
  // Content
  doc.text(splitText, 10, 45);
  
  // Save with sanitized filename
  const fileName = rec.title.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
  doc.save(`${fileName}.pdf`);
};
