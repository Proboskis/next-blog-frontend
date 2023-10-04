import {Card, CardHeader, CardBody} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Avatar} from "@nextui-org/avatar";
import {Link} from "@nextui-org/link";
import {Chip} from "@nextui-org/chip";

export default function PostCard() {
  return (
    <Card
      shadow="xs"
      className="cursor-pointer max-w-full"
    >
      <Image
        className="w-full object-cover rounded-xl"
        alt="Card background"
        src="/blog-picture.jpg"
        width={300}
      />
      <CardBody>
        <div className="pb-0 pt-2 px-4 flex-col items-start">
          {/*
          <div className="flex justify-center items-center mb-6 -ml-6">
            <Avatar
              isBordered
              color="primary"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
            <div className="flex flex-col justify-center items-start text-xs ml-4">
              <Link size="sm" className="text-green-700">Nikola Surla</Link>
              <span>Last updated: Jan 23, 2023</span>
              <span>Reading time &diams; 5 min</span>
            </div>
          </div>
           */}
          <h4 className="font-bold text-large">
            Frontend Radio
          </h4>
          <p className="text-default-500">
            01.01.2023
          </p>
          {/*
          <div className="mt-4">
            <p className="mx-2 pl-4 text-xs md:mx-4 md:border-l-4 md:border-gray-200 break-words max-w-[11rem]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur distinctio praesentium
              quasi repellendus. Deserunt doloremque dolores earum fugit, hic iste laudantium minus quisquam sed!
            </p>
          </div>
          */}
        </div>
        <span className="ml-2">
          <Chip
            className="px-2 py-1 my-6 rounded-full text-xs font-medium leading-4 md:my-8"
            color="warning"
            variant="flat"
            size="sm"
          >
            lorem
          </Chip>
        </span>
      </CardBody>
    </Card>
  );
}