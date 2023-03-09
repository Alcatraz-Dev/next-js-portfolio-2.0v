"use client";
import { usePreview } from "@/lib/sanity.preview";
import AssetList from "./assetList";

type Props = {
  asset: string;
};
function PreviewAsset({ asset }: Props) {
  const assets = usePreview(null, asset);

  return <AssetList asset={assets} />;
}

export default PreviewAsset;
