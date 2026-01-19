const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.5 9h1v4h-1V9zm0-2h1V6h-1v1z" fill="currentColor"/>
  </svg>
);


export default function TrainingStatus( {isLoading } : { isLoading : boolean})
{
    return (        
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
      </div>);
}