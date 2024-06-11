import LoadingBlinkBox from "@/components/LoadingBlinkBox";
import Image from "next/image";

export const ThumbnailImage = ({
  src,
  loading,
}: {
  src: string;
  loading: boolean;
}) => {
  return (
    <LoadingBlinkBox loading={loading} loadingHeight="100%" loadingWidth="100%">
      <div className="fx-grain-5" tw="w-full h-full">
        <Image src={src} alt="Thumbnail Image" fill tw="object-cover" />
      </div>
    </LoadingBlinkBox>
  );
};

export default ThumbnailImage;
