import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { base64Prefix } from "@/lib/utils";

const PostImage = ({
  className = "",
  images,
}: {
  className?: string;
  images?: string[];
}) => {
  const images1 = ["/img.svg", "/img.svg", "/img.svg", "/img.svg", "/img.svg"];
  const base64toBlob = (
    base64Data: string,
    contentType = "",
    sliceSize = 512
  ): Blob => {
    const byteCharacters = atob(base64Data);
    const byteArrays: Uint8Array[] = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  };

  return (
    // <div className={className}>
    <Carousel>
      <CarouselContent>
        {images?.map((image, index) => {
          // const blobUrl = URL.createObjectURL(
          //   base64toBlob(image, "image/jpeg")
          // );

          return (
            <CarouselItem key={index} className={className}>
              <Image
                src={`${base64Prefix}${image}`}
                layout="fill"
                objectFit="contain"
                alt="Image"
                className="object-center"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      {images?.length! > 1 && (
        <>
          <CarouselPrevious className="absolute left-1" />
          <CarouselNext className="absolute right-1" />
          {/* <CarouselDots className="absolute bottom-0 w-10 right-1/2" /> */}
        </>
      )}
    </Carousel>
    // </div>
  );
};

export default PostImage;
