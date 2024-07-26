import Image from "next/image";

interface Props {
  name: string;
  image: string;
  description: string
}

const ProjectCard = ({ name, image, description }: Props) => {
  return (
    <article className="w-1/3 h-full cursor-pointer">
      <div className="w-full h-48">
        <Image
          src={image}
          width={640}
          height={360}
          alt={name}
          className="h-[11rem] rounded-3xl shadow-xl min-[1600px]:h-[14rem] max-[1030px]:h-[9rem] max-[1030px]:rounded-2xl"
        />
      </div>
      <div className="mt-9 ml-1 max-[1600px]:-mt-2 max-[1030px]:-mt-7">
        <h4 className="text-body-semibold">{name}</h4>
        <p className="text-small-regular text-gray-600/90">{description}</p>
      </div>
    </article>
  )
}

export default ProjectCard;