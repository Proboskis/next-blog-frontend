import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";

export default function PostCard() {
  return (
    <Card
      shadow="sm"
    >
      <Image
        alt="Card background"
        className="w-full object-cover rounded-xl"
        src="/blog-picture.jpg"
        width={300}
      />
      <CardBody>
        <div className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </div>
      </CardBody>
    </Card>
  );
}
