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
        <div className="border-l-2 border-gray-300 rounded-b-md shadow-lg bg-gray-50 p-4">
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
        <div className="w-full flex items-center py-2 text-base hover:bg-gray-100 transition-colors">
            <div className="min-w-min w-1/3 font-semibold text-gray-700 mr-2">
                {infoItem.title + ":"}
            </div>
            <div className="w-2/3 break-words text-gray-600 text-left">
                {infoItem.text}
            </div>
        </div>
    )
}