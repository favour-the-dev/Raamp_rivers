import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps{
    id: number
    imageUrl: string,
    header: string, 
    dateProp: Date | string
}

function ProjectCard({id, imageUrl, header, dateProp}: ProjectCardProps) {
    const date = new Date(dateProp)
    return ( 
        <>
            <div className="min-w-[350px] w-full mx-auto p-4 cursor-pointer hover:scale-105 duration-150 ease-in-out group">
                <Image
                src={imageUrl}
                alt=""
                width={350}
                height={200}
                className="w-full"
                />
                <div className="bg-white flex flex-col items-start gap-4 p-4">
                    <h2 className="text-[#333333] font-bold text-xl text-start group-hover:underline duration-150 ease-linear">{header}</h2>
                    <div className="text-[#333333] text-sm flex items-center justify-center gap-2">
                        <span>{date.toLocaleDateString()}</span>
                        <span>|</span>
                        <span>Press Release</span>
                    </div>
                    <Link href={`/Projects/${id}`} className="uppercase text-primary text-lg font-semibold group-hover:underline duration-150 ease-linear">View More</Link>
                </div>
            </div>    
        </>
    );
}

export default ProjectCard;