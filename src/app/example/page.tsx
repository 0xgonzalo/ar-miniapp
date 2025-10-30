'use client';

import { useBaseMiniApp } from '@/components/BaseMiniAppProvider';

export default function ExamplePage() {
  const { context, isLoading, user, client } = useBaseMiniApp();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Loading Base Mini App...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-8">Base Mini App Context</h1>

      <div className="w-full max-w-2xl space-y-6">
        {/* User Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">User Information</h2>
          {user ? (
            <div className="space-y-2">
              <p><strong>FID:</strong> {user.fid}</p>
              <p><strong>Username:</strong> {user.username || 'N/A'}</p>
              <p><strong>Display Name:</strong> {user.displayName || 'N/A'}</p>
              <p><strong>Profile Image:</strong></p>
              {user.pfpUrl && (
                <img
                  src={user.pfpUrl}
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
              )}
            </div>
          ) : (
            <p className="text-gray-500">No user data available</p>
          )}
        </div>

        {/* Client Information */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Client Information</h2>
          {client ? (
            <div className="space-y-2">
              <p><strong>Client FID:</strong> {client.fid}</p>
              <p><strong>Client Name:</strong> {client.clientName || 'N/A'}</p>
            </div>
          ) : (
            <p className="text-gray-500">No client data available</p>
          )}
        </div>

        {/* Full Context */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Full Context (Debug)</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-auto text-xs">
            {JSON.stringify(context, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
