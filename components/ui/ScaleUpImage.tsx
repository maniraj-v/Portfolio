import { cn } from "@/lib/utils";
import Image from "next/image";

const ScaleUpImage = ({
  className = "",
  src = "",
  alt = "",
  width = 100,
  height = 100,
}) => {
  return (
    <div className={cn("group h-full w-full overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full aspect-auto object-left-top object-cover group-hover:scale-110 transition duration-300"
      />
    </div>
  );
};
export default ScaleUpImage;
