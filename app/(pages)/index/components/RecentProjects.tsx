import projects from "@/app/services/project";
import ProjectCard from "./ProjectCard";
function RecentProjects() {
    return ( 
        <>
            <section className="py-6 bg-primary bg-opacity-25">
                <div className="wrapper-cont flex flex-col items-center justify-center text-center gap-6 my-6">
                    <h2 className="before:bg-gray-400 before:w-12 before:h-12 before:rounded-full before:absolute before:left-[-20px] before:top-[-10px] before:opacity-40 relative text-primary text-xl">Rivers State SPUI</h2>
                    <h3 className="text-[#333333] font-bold text-5xl">Recent Projects</h3>
                    <div className="flex flex-col md:flex-row items-start gap-4">
                        {
                            projects.map((project, index)=>{
                                return(
                                    <ProjectCard
                                    id={project.id}
                                    imageUrl={project.imageUrl}
                                    header={project.header}
                                    dateProp={project.dateProp}
                                    key={index}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>    
        </>
    );
}

export default RecentProjects;