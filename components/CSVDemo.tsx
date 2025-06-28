"use client";

import React, { useState } from 'react';

type CsvRow = string[];

const parseCsv = (raw: string): CsvRow[] => {
  return raw
    .trim()
    .split(/\r?\n/)
    .map((line) => line.split(',').map((c) => c.trim()));
};

const CSVDemo: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [rows, setRows] = useState<CsvRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  /* --------------------- helpers --------------------- */
  const handleFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const file = fileList[0];
    if (!file.name.toLowerCase().endsWith('.csv')) {
      setError('Please upload a valid .csv file.');
      return;
    }
    setError(null);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = parseCsv(text);
        setRows(parsed);
        setAnalyzing(true);
        // fake processing delay
        setTimeout(() => {
          setAnalyzing(false);
          setAnalysisComplete(true);
        }, 1500);
      } catch (err) {
        console.error(err);
        setError('Failed to parse CSV.');
      }
    };
    reader.readAsText(file);
  };

  /* ------------------ drag-n-drop ------------------ */
  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };
  const onDragLeave = () => setDragActive(false);
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    handleFiles(e.dataTransfer.files);
  };

  /* --------------- hidden file input --------------- */
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const browse = () => fileInputRef.current?.click();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Interactive Menu Analysis Demo</h3>

      <div className="mb-8">
        <div
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className={`border-2  p-8 text-center rounded-lg transition ${
            dragActive ? 'border-[#e54b00] bg-[#ff642e]/20' : 'border-[#ff642e]/40 bg-[#ff642e]/10'
          }`}
        >
          <p className="text-lg font-semibold text-[#ff642e] mb-2">
            Drag & Drop Your Menu CSV Here
          </p>
          <p className="text-gray-600">or click to select file</p>
          <button
            onClick={browse}
            className="mt-4 bg-[#ff642e] text-white px-6 py-2 rounded-full hover:bg-[#e54b00] transition"
          >
            Browse Files
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
        </div>
      </div>

      {/* error message */}
      {error && (
        <div className="mb-4 text-red-600 font-semibold text-center">{error}</div>
      )}

      {/* show table after parsing */}
      {rows && (
        <div className="mb-8">
          <h4 className="text-xl font-semibold text-gray-700 mb-4">Preview ({rows.length} rows)</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
              <tbody>
                {rows.slice(0, 100).map((cols, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    {cols.map((cell, ci) => (
                      <td key={ci} className="py-2 px-4 whitespace-nowrap">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {rows.length > 100 && (
              <p className="text-gray-500 text-xs mt-2">
                Showing first 100 rows of {rows.length}
              </p>
            )}
          </div>
        </div>
      )}

      <div className="text-center">
        {analyzing && (
          <p className="text-[#ff642e] font-semibold text-lg">Analyzing...</p>
        )}
        {analysisComplete && (
          <p className="text-green-600 font-semibold text-lg">
            <i className="fas fa-check-circle mr-2"></i>Analysis Complete!
          </p>
        )}
      </div>

      {analysisComplete && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          <p className="font-semibold">Your menu is ready!</p>
          <p>You can now see the estimated calorie counts. This is what your customers will see.</p>
        </div>
      )}
    </div>
  );
};

export default CSVDemo;
