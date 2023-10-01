import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";

export default function PostCard() {
  return (
    <Card className="py-4 w-fit">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="/blog-picture.jpg"
          width={270}
        />
      </CardBody>
    </Card>
  );
}
