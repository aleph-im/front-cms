import LoadingBlinkBox from "@/components/LoadingBlinkBox";
import Image from "next/image";

export const FeatureImage = ({
  src,
  loading,
}: {
  src: string;
  loading: boolean;
}) => {
  return (
    <LoadingBlinkBox loading={loading} loadingHeight="100%" loadingWidth="100%">
      <div tw="relative w-full h-full flex justify-center">
        <Image src={src} alt="Feature Image" fill />
      </div>
    </LoadingBlinkBox>
  );
};

export default FeatureImage;
