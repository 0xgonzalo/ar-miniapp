// Type definitions for AR Mini App

import { ReactNode } from 'react';

// Base Mini App Types
export interface BaseMiniAppUser {
  fid: number;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
}

export interface BaseMiniAppClient {
  fid: number;
  clientName?: string;
}

export interface BaseMiniAppContext {
  user?: BaseMiniAppUser;
  client?: BaseMiniAppClient;
}

export interface UseBaseMiniAppReturn {
  context: BaseMiniAppContext | null;
  isLoading: boolean;
  user?: BaseMiniAppUser;
  client?: BaseMiniAppClient;
}

// Component Props Types
export interface ModelProps {
  modelUrl?: string;
  rotation?: [number, number, number];
  animate?: boolean;
  rotationSpeed?: number;
}

export interface ModelComponentProps {
  model: ReactNode;
  target?: string;
  scale?: number;
  position?: [number, number, number];
  ligths?: ReactNode;
}

export interface BaseMiniAppProviderProps {
  children: ReactNode;
}

export interface ControlesRotacionProps {
  children: ReactNode;
}

// Scene Types
export interface SceneLightsProps {
  intensity?: number;
}

// Manifest Types
export interface MiniAppManifest {
  miniapp: {
    name: string;
    version?: string;
    homeUrl: string;
    iconUrl: string;
    splashImageUrl: string;
    splashBackgroundColor: string;
    description: string;
    primaryCategory: string;
  };
  baseBuilder: {
    ownerAddress: string;
  };
  accountAssociation: {
    header?: string;
    payload?: string;
    signature?: string;
  };
}

// Environment Variables
export interface EnvVars {
  NEXT_PUBLIC_APP_URL?: string;
  BASE_OWNER_ADDRESS?: string;
  ACCOUNT_ASSOCIATION_HEADER?: string;
  ACCOUNT_ASSOCIATION_PAYLOAD?: string;
  ACCOUNT_ASSOCIATION_SIGNATURE?: string;
}
