import React, { useState } from 'react';
import { Shield, ShieldOff } from 'lucide-react';

const ProtectionToggle = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isEnabled ? (
            <Shield className="w-6 h-6 text-green-500" />
          ) : (
            <ShieldOff className="w-6 h-6 text-red-500" />
          )}
          <div>
            <h2 className="font-semibold">Protection Status</h2>
            <p className="text-sm text-gray-600">
              {isEnabled ? 'Active Protection' : 'Protection Disabled'}
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsEnabled(!isEnabled)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
            isEnabled ? 'bg-indigo-600' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              isEnabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ProtectionToggle;