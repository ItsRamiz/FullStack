'use client';

import { useState } from 'react';
import Link from 'next/link';

// SVG Icons as components
const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
  </svg>
);

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" fill="currentColor"/>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
  </svg>
);

const SaveIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" fill="currentColor"/>
  </svg>
);

const UploadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" fill="currentColor"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v10l8-5-8-5z" fill="currentColor"/>
  </svg>
);

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.5 9h1v4h-1V9zm0-2h1V6h-1v1z" fill="currentColor"/>
  </svg>
);

export default function TrainingPage() {
  const [formData, setFormData] = useState({
    modelName: '',
    modelType: 'MiniGrid-BlockedUnlockPickup-v0',
    epochs: '100',
    framesPerProcess: '128',
    learningRate: '0.001',
    entropyCoefficient: '0.01',
    maxGradientNorm: '0.5',
    batchSize: '32',
    discount: '0.99',
    gaeLambda: '0.95',
    valueLossCoefficient: '0.5'
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [gifUrl, setGifUrl] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveConfiguration = () => {
    // Save configuration logic
    console.log('Saving configuration:', formData);
  };

  const handleLoadConfiguration = () => {
    // Load configuration logic
    console.log('Loading configuration');
  };

  const handleTrainModel = async () => {
    try {
      setIsLoading(true);
      console.log('Starting training with:', formData);
  
      const response = await fetch("http://localhost:5001/train", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Backend response:", data);
      
      // Always show modal with response data
      setGifUrl(data.gifUrl || '');
      setShowModal(true);
      
    } catch (error) {
      console.error("Error sending training request:", error);
      // Show error in modal
      setGifUrl('');
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setGifUrl('');
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
              <span className="text-xl font-bold text-gray-900">ML Training Platform</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">Dashboard</Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Models</a>
              <a href="/training" className="text-gray-900 font-semibold border-b-2 border-gray-900">Training</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Settings</a>
            </nav>
            
            {/* Notifications and User Profile */}
            <div className="flex items-center space-x-4">
              <button className="w-8 h-8 text-gray-600 hover:text-gray-900">
                <BellIcon />
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <UserIcon />
              </div>
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
            Model Training Configuration
          </h1>
          <p className="text-lg text-gray-600">
            Configure training parameters for your machine learning model.
          </p>
        </div>

        {/* Configuration Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model Name
                </label>
                <input
                  type="text"
                  value={formData.modelName}
                  onChange={(e) => handleInputChange('modelName', e.target.value)}
                  placeholder="Enter model name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Name for your training model.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Model Type
                </label>
                <select
                  value={formData.modelType}
                  onChange={(e) => handleInputChange('modelType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="MiniGrid-BlockedUnlockPickup-v0">MinigridUnlock</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">Type of model to train.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Epochs
                </label>
                <input
                  type="text"
                  value={formData.epochs}
                  onChange={(e) => handleInputChange('epochs', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Number of training epochs.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Frames Per Process
                </label>
                <input
                  type="text"
                  value={formData.framesPerProcess}
                  onChange={(e) => handleInputChange('framesPerProcess', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Number of frames per process.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Learning Rate
                </label>
                <input
                  type="text"
                  value={formData.learningRate}
                  onChange={(e) => handleInputChange('learningRate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Learning rate for optimization.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entropy Coefficient
                </label>
                <input
                  type="text"
                  value={formData.entropyCoefficient}
                  onChange={(e) => handleInputChange('entropyCoefficient', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Entropy coefficient for exploration.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Gradient Norm
                </label>
                <input
                  type="text"
                  value={formData.maxGradientNorm}
                  onChange={(e) => handleInputChange('maxGradientNorm', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Maximum gradient norm for clipping.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Batch Size
                </label>
                <input
                  type="text"
                  value={formData.batchSize}
                  onChange={(e) => handleInputChange('batchSize', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Training batch size.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Discount
                </label>
                <input
                  type="text"
                  value={formData.discount}
                  onChange={(e) => handleInputChange('discount', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Discount factor for future rewards.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GAE Lambda
                </label>
                <input
                  type="text"
                  value={formData.gaeLambda}
                  onChange={(e) => handleInputChange('gaeLambda', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">GAE lambda parameter.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Value Loss Coefficient
                </label>
                <input
                  type="text"
                  value={formData.valueLossCoefficient}
                  onChange={(e) => handleInputChange('valueLossCoefficient', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <p className="text-sm text-gray-500 mt-1">Value function loss coefficient.</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-8 border-t border-gray-200">
            <button
              onClick={handleSaveConfiguration}
              className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <SaveIcon />
              <span>Save Configuration</span>
            </button>
            <button
              onClick={handleLoadConfiguration}
              className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <UploadIcon />
              <span>Load Configuration</span>
            </button>
            <button
              onClick={handleTrainModel}
              disabled={isLoading}
              className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-colors ${
                isLoading 
                  ? 'bg-gray-400 text-white cursor-not-allowed' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Training...</span>
                </>
              ) : (
                <>
                  <PlayIcon />
                  <span>Train Model</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Training Status */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <InfoIcon />
            </div>
            <div>
              <h3 className="text-lg font-medium text-blue-900 mb-1">
                Training Status
              </h3>
              <p className="text-blue-700">
                {isLoading 
                  ? "Training in progress... Please wait." 
                  : "Ready to start training. Configure parameters above and click 'Train Model'."
                }
              </p>
            </div>
          </div>
        </div>

        {/* GIF Response Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 relative">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
              
              {/* Modal Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Training Response
                </h3>
                {gifUrl ? (
                  <>
                    <div className="mb-4">
                      <img 
                        src={gifUrl} 
                        alt="Training Response" 
                        className="max-w-full h-auto rounded-lg shadow-lg"
                      />
                    </div>
                    <p className="text-gray-600">
                      Your training request has been processed successfully!
                    </p>
                  </>
                ) : (
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Training request sent successfully! Check your backend for processing status.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
