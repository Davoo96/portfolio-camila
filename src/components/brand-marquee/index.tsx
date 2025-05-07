import StarIcon from "@/components/icons/star-icon";
import Image from "next/image";

const brands = [
  "/banco-pan-logo.png",
  "/bunge-logo.png",
  "/cargil-logo.png",
  "/faber-castell-logo.png",
  "/pao-acucar-logo.png",
  "/sebrae-logo.png",
  "/tim-logo.png",
  "/ultragas-logo.png",
  "/universia-logo.png",
];

const BrandMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden py-7">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        <StarIcon className="h-9 w-9 shrink-0" />
        <p className="text-yellow px-4 text-4xl font-bold">
          Cool brands I&apos;ve worked with
        </p>
        {brands.map((src, index) => (
          <div
            key={`first-${index}`}
            className="flex min-w-max items-center gap-4 pr-4"
          >
            <StarIcon className="h-9 w-9 shrink-0" />
            <Image
              priority
              src={src}
              alt={`Brand ${index}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}

        <StarIcon className="h-9 w-9 shrink-0" />
        <p className="text-yellow px-4 text-4xl font-bold">
          Cool brands I&apos;ve worked with
        </p>
        {brands.map((src, index) => (
          <div
            key={`second-${index}`}
            className="flex min-w-max items-center gap-4 pr-4"
          >
            <StarIcon className="h-9 w-9 shrink-0" />
            <Image
              priority
              src={src}
              alt={`Brand ${index}`}
              width={120}
              height={60}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandMarquee;
