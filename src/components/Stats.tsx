import React from 'react';
import { ShieldCheck, Cookie, Fingerprint } from 'lucide-react';

const Stats = () => {
  return (
    <div className="grid grid-cols-3 gap-4 my-4">
      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
        <ShieldCheck className="w-6 h-6 text-green-500 mx-auto mb-2" />
        <p className="text-2xl font-bold">127</p>
        <p className="text-xs text-gray-600">Trackers Blocked</p>
      </div>

      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
        <Cookie className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
        <p className="text-2xl font-bold">45</p>
        <p className="text-xs text-gray-600">Cookies Protected</p>
      </div>

      <div className="bg-white p-3 rounded-lg shadow-sm text-center">
        <Fingerprint className="w-6 h-6 text-blue-500 mx-auto mb-2" />
        <p className="text-2xl font-bold">89</p>
        <p className="text-xs text-gray-600">Fingerprints Blocked</p>
      </div>
    </div>
  );
};

export default Stats;