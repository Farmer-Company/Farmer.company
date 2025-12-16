import React from 'react';

export const PortalPlaceholder = ({ name }: { name: string }) => {
    return (
        <div className="h-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold font-mono mb-4 text-white">{name} PORTAL</h1>
            <p className="text-gray-500 max-w-md font-mono text-sm">
                MODULE UNDER CONSTRUCTION. INITIALIZING DATA STREAMS...
            </p>
        </div>
    );
};
