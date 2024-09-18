'use client';

import React from 'react';
import { useAuth } from "@clerk/nextjs";

export default function TestPage() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Test Page</h1>
      <p>User ID: {userId || 'Not signed in'}</p>
    </div>
  );
}