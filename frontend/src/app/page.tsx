import Link from "next/link";

// SVG Icons as components
const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5v10l8-5-8-5z" fill="currentColor"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17v2h14v-2H3zM9 7v10h2V7H9zM5 11v6h2v-6H5zm8-4v10h2V7h-2z" fill="currentColor"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" fill="currentColor"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" fill="currentColor"/>
    <path d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" fill="currentColor"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" fill="currentColor"/>
  </svg>
);

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
  </svg>
);

export default function Home() {
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
              <span className="text-xl font-bold text-gray-900">DeepLearn Studio</span>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Models</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Environments</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">Documentation</a>
              <Link href="/training" className="text-gray-700 hover:text-gray-900 font-medium">Training</Link>
            </nav>
            
            {/* User Profile */}
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <UserIcon />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="w-24 h-24 bg-gray-900 rounded-lg mx-auto mb-8 flex items-center justify-center">
            <BrainIcon />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Deep Learning Workspace
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Build, train, and visualize neural networks with our comprehensive deep learning platform. 
            Start your AI journey with powerful tools and intuitive interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/training" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
              <PlayIcon />
              <span>Train Model</span>
            </Link>
            <Link href="/visualize" className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
              <ChartIcon />
              <span>Visualize</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Train Neural Networks */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Train Neural Networks
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Design and train custom deep learning models with our intuitive interface. 
                Configure architectures, hyperparameters, and training pipelines with ease.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span className="text-gray-700">Custom neural network architectures</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span className="text-gray-700">Real-time training monitoring</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckIcon />
                  <span className="text-gray-700">GPU acceleration support</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <span className="text-gray-600 text-lg font-medium">Neural Network Training Interface</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Visualize Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Visualize Results
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Understand your models better with comprehensive visualization tools. 
                Analyze performance metrics, loss curves, and model predictions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <ChartIcon />
                  <span className="text-gray-700">Interactive performance charts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <EyeIcon />
                  <span className="text-gray-700">Model architecture visualization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <DocumentIcon />
                  <span className="text-gray-700">Export results and reports</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center lg:order-1">
              <span className="text-gray-600 text-lg font-medium">Data Visualization Dashboard</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Statistics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Platform Statistics
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600 text-lg">Models Trained</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">1M+</div>
              <div className="text-gray-600 text-lg">Datasets Processed</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600 text-lg">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
