'use client';

import { useState } from 'react';
import Link from 'next/link';

// SVG Icons as components
const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
  </svg>
);

const ListIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" fill="currentColor"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fill="currentColor"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM10 3a1 1 0 00-1 1v10.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L11 13.586V4a1 1 0 00-1-1z" fill="currentColor"/>
  </svg>
);

const FullscreenIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 110 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 00-1 1v1.586l-2.293-2.293a1 1 0 10-1.414 1.414L13.586 15H12a1 1 0 100 2h4a1 1 0 001-1v-4a1 1 0 00-1-1z" fill="currentColor"/>
  </svg>
);

const PlaceholderIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="currentColor"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17v2h14v-2H3zM9 7v10h2V7H9zM5 11v6h2v-6H5zm8-4v10h2V7h-2z" fill="currentColor"/>
  </svg>
);

const LineChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" fill="currentColor"/>
  </svg>
);

export default function VisualizePage() {
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string>('');
  const [visualizationGif, setVisualizationGif] = useState('');
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [recentVisualizations, setRecentVisualizations] = useState([
    { id: 1, title: 'Sample Visualization 1', created: '2 hours ago', icon: ClockIcon },
    { id: 2, title: 'Sample Visualization 2', created: '1 day ago', icon: ChartIcon },
    { id: 3, title: 'Sample Visualization 3', created: '3 days ago', icon: LineChartIcon }
  ]);

  const handleRefreshName = async () => {
    try {
      const response = await fetch("http://localhost:5001/visualize/refresh");
      const data = await response.json();
      
      // Handle the data structure from Python backend: {"names": ["Alice", "Bob"]}
      if (data) {
        setNames(data.names);

      } else {
        console.error('Unexpected data structure:', data);
        setNames([]);
      }
    } catch (error) {
      console.error('Error fetching names:', error);
      setNames([]);
    }
  };

  const handleVisualize = async () => {
    if (!selectedName) return;
    
    setIsVisualizing(true);
    
    try {
      // Send the selected name to the backend
      const response = await fetch("http://localhost:5001/visualize/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedName }),
      });

      const data = await response.json();
      console.log("Visualization response:", data);

      // Handle the response from your backend
      if (data.gifUrl) {
        setVisualizationGif(data.gifUrl);
      } else {
        // Fallback to demo GIF if no URL provided
        const demoGifUrl = 'https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif';
        setVisualizationGif(demoGifUrl);
      }
      
      // Add to recent visualizations
      const newViz = {
        id: Date.now(),
        title: `Visualization for ${selectedName}`,
        created: 'Just now',
        icon: ChartIcon
      };
      setRecentVisualizations([newViz, ...recentVisualizations.slice(0, 2)]);
      
    } catch (error) {
      console.error('Error generating visualization:', error);
      // Show error message or fallback GIF
    } finally {
      setIsVisualizing(false);
    }
  };

  const handleDownload = () => {
    if (visualizationGif) {
      const link = document.createElement('a');
      link.href = visualizationGif;
      link.download = 'visualization.gif';
      link.click();
    }
  };

  const handleFullscreen = () => {
    if (visualizationGif) {
      window.open(visualizationGif, '_blank');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleRefreshName();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                <BrainIcon />
              </div>
              <span className="text-xl font-bold text-gray-900">Data Visualizer</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</Link>
              <a href="/visualize" className="text-gray-900 font-semibold border-b-2 border-gray-900">Visualize</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Settings</a>
            </nav>
            
            {/* User Profile */}
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 13.586l3.293-3.293a1 1 0 011.414 0z" fill="currentColor"/>
            </svg>
            <span>Back to Dashboard</span>
          </Link>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Name List Visualizer
          </h1>
          <p className="text-lg text-gray-600">
            Select a name from your list and visualize the data.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Panel: Name List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Name List</h2>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                {names?.length ?? 0} items
              </span>
            </div>

            {/* Refresh Button */}
            <div className="mb-6">
              <button
                onClick={handleRefreshName}
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <PlusIcon />
                <span>Refresh Names</span>
              </button>
            </div>

            {/* Names List */}
            <div className="space-y-2 mb-6">
              {names?.map((name, index) => (
                <div 
                  key={index} 
                  className={`flex items-center p-3 rounded-md cursor-pointer transition-colors ${
                    selectedName === name 
                      ? 'bg-blue-100 border-2 border-blue-300' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedName(name)}
                >
                  <span className="text-gray-700">{name}</span>
                </div>
              ))}
            </div>

            {/* Visualize Button */}
            <button
              onClick={handleVisualize}
              disabled={!selectedName || isVisualizing}
              className={`w-full py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
                !selectedName || isVisualizing
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-700 text-white hover:bg-gray-800'
              }`}
            >
              {isVisualizing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Visualizing...</span>
                </>
              ) : (
                <>
                  <ListIcon />
                  <span>Visualize</span>
                </>
              )}
            </button>
          </div>

          {/* Right Panel: Visualization */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Visualization</h2>
              <div className="flex space-x-2">
                <button
                  onClick={handleDownload}
                  disabled={!visualizationGif}
                  className={`p-2 rounded-md transition-colors ${
                    visualizationGif
                      ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  title="Download"
                >
                  <DownloadIcon />
                </button>
                <button
                  onClick={handleFullscreen}
                  disabled={!visualizationGif}
                  className={`p-2 rounded-md transition-colors ${
                    visualizationGif
                      ? 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  title="Fullscreen"
                >
                  <FullscreenIcon />
                </button>
              </div>
            </div>

            {/* Visualization Display Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 min-h-80 flex items-center justify-center">
              {visualizationGif ? (
                <img
                  src={visualizationGif}
                  alt="Data Visualization"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PlaceholderIcon />
                  </div>
                  <p className="text-gray-500 mb-2">Visualization will appear here</p>
                  <p className="text-gray-400 text-sm">Select a name and click 'Visualize' to generate your data visualization.</p>
                </div>
              )}
            </div>

            {/* Status Bar */}
            <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
              <span>Ready to visualize</span>
              <span>Format: GIF</span>
              <span>Quality: HD</span>
            </div>
          </div>
        </div>

        {/* Recent Visualizations */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Visualizations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recentVisualizations.map((viz) => (
              <div key={viz.id} className="border border-gray-200 rounded-lg p-4">
                <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  <viz.icon />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{viz.title}</h3>
                <p className="text-sm text-gray-500">{viz.created}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
