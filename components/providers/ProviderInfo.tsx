import React from "react";

import { WifiIcon, WifiOffIcon, WifiPendingIcon } from "../icons";
import {
  AWSProviderBadge,
  AzureProviderBadge,
  GCPProviderBadge,
  KS8ProviderBadge,
} from "../icons/providers-badge";

interface ProviderInfoProps {
  connected: boolean | null;
  provider: "aws" | "azure" | "gcp" | "kubernetes";
  providerAlias: string;
  providerId: string;
}

export const ProviderInfo: React.FC<ProviderInfoProps> = ({
  connected,
  provider,
  providerAlias,
  providerId,
}) => {
  const getIcon = () => {
    switch (connected) {
      case true:
        return <WifiIcon size={22} />;
      case false:
        return <WifiOffIcon size={22} />;
      case null:
      default:
        return <WifiPendingIcon size={22} />;
    }
  };

  const getProviderLogo = () => {
    switch (provider) {
      case "aws":
        return <AWSProviderBadge width={35} height={35} />;
      case "azure":
        return <AzureProviderBadge width={35} height={35} />;
      case "gcp":
        return <GCPProviderBadge width={35} height={35} />;
      case "kubernetes":
        return <KS8ProviderBadge width={35} height={35} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-fit">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div className="flex-shrink-0 mx-2">{getProviderLogo()}</div>
        <div className="flex flex-col">
          <span className="text-md font-semibold">{providerAlias}</span>
          <span className="text-sm text-gray-500">{providerId}</span>
        </div>
      </div>
    </div>
  );
};
