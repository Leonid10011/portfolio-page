import ProjectInfo from "./ProjectInfo"
import ProjectPicture from "./ProjectPicture"

export interface InfoItem {
    id: number,
    title:string,
    text: string
}


export interface Item {
    id: number,
    name: string,
}
/**
 * This view consists of a project picture, in form of a ProjectPicture component, and some notable information about it in a ProjectInfo component
 * @param infoItems: The necessary information to be displayed 
 */
export default function ProjectView({infoItems}: {
    infoItems: InfoItem[]
}){
    return(
        <>
            <div className="flex flex-col pt-8 px-4">
                <ProjectPicture/>
                <ProjectInfo infoItems={infoItems}/>
            </div>
        </>
    )
}






