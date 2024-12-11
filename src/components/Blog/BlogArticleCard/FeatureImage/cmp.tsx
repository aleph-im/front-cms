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
      <div tw="relative w-auto h-full flex items-center justify-center">
        <Image
          src={src}
          alt="Feature Image"
          height={0}
          width={0}
          tw="relative! w-auto h-auto max-w-full max-h-full"
        />
      </div>
    </LoadingBlinkBox>
  );
};

export default FeatureImage;
