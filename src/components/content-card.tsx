import Image from "next/image";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";

interface ContentCardProps {
  title: string;
  des: string;
  img: string;
}
export function ContentCard({
  title,
  des,
  img,
}: ContentCardProps) {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="lg:!flex-row mb-10"
    >
      <CardHeader
        floated={false}
        shadow={false}
        className="h-[32rem] max-w-[28rem] shrink-0"
      >
        <Image
          width={200}
          height={200}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="col-span-full lg:col-span-3">
        <Typography variant="h2" color="blue-gray" className="mb-4 font-medium">
          {title}
        </Typography>
        <Typography className="mb-12 md:w-8/12 font-medium !text-gray-10">
          {des}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default ContentCard;
