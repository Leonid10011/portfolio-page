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

export default function ProjectView({infoItems}: {
    infoItems: InfoItem[]
}){
    return(
        <>
            <div className="flex flex-col p-16">
                <ProjectPicture/>
                <ProjectInfo infoItems={infoItems}/>
            </div>
        </>
    )
}






