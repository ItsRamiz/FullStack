import { useState } from 'react';

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


const handleInputChange = (field: string, value: string) => {
setFormData(prev => ({
    ...prev,
    [field]: value
}));
};

export default function ConfigForm()
{
    return(

        /* Configuration Form */
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
        </div>

    )
}