import ProjectInfo from "./ProjectInfo"
import ProjectPicture from "./ProjectPicture"

export interface Item {
    id: number,
    title:string,
    text: string
}

export default function ProjectView({infoItems}: {
    infoItems: Item[]
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






