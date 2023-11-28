import { InfoItem } from "./ProjectView";
/**
 * This component will display some notable information about the selected project in the project view.
 * It maps each infoItem (consisting of the notable information) onto the ProjectInfoItem component.
 * @param infoItems: contains the info title, its description and a unique id 
 */
export default function ProjectInfo({infoItems} : {
    infoItems: InfoItem[]
}){
    return(
        <div className="border-b-4 border-l-4 border-r-4 border-black rounded-b-md">
            {infoItems.map(infoItem => (
                <ProjectInfoItem key={infoItem.id} infoItem={infoItem}/>
            ))}
        </div>
    );
}

function ProjectInfoItem({infoItem}: {
    infoItem: InfoItem
}){
    return(
        <div className="flex my-1">
            <div className=" w-1/3 whitespace-pre-line font-semibold">
                <span>{infoItem.title + ":"}</span>
            </div>
            <div className="w-full font-thin">
                {infoItem.text}
            </div>
        </div>
    )
}