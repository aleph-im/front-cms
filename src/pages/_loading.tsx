import { memo } from "react";
import SpinnerOverlay from "@/components/SpinnerOverlay";
import { useRouterLoadState } from "@/hooks/common/useRouterLoadState";

export type LoadingProps = {
  show?: boolean;
};

export function Loading({ show }: LoadingProps) {
  const { loading } = useRouterLoadState();

  return <SpinnerOverlay show={show || loading} center fullScreen />;
}
Loading.displayName = "Loading";

export default memo(Loading);
