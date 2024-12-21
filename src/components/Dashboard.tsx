import React from 'react';
import { Shield, Globe, Bell, Settings } from 'lucide-react';
import Stats from './Stats';
import ProtectionToggle from './ProtectionToggle';

const Dashboard = () => {
  return (
    <div className="w-[400px] bg-gray-50">
      <header className="bg-indigo-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            <h1 className="text-xl font-bold">Privacy Guardian</h1>
          </div>
          <Settings className="w-5 h-5 cursor-pointer hover:opacity-80" />
        </div>
      </header>

      <main className="p-4">
        <ProtectionToggle />
        <Stats />
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold">VPN Status</h3>
            </div>
            <p className="text-sm text-gray-600">Not Connected</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-5 h-5 text-indigo-600" />
              <h3 className="font-semibold">Alerts</h3>
            </div>
            <p className="text-sm text-gray-600">No recent alerts</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;