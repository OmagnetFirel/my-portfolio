interface iCardProps{
    description: string;
    image: string;
    date: string;
}

export const Card = (props:iCardProps) => {
    const {description, image, date} = props
  return (
    <div className="blogSelvaAsideCard flex flex-col gap-y-4 ">
        <p className="text-zinc-700 font-sans">{date}</p>
        <div className="flex flex-row items-center  gap-x-6 ">
            <img src={image} alt="pré visualizador do post"/>
            <p className="font-sans text-base tracking-wide leading-relaxed">{description}</p>
        </div>
    </div>
  )

}
