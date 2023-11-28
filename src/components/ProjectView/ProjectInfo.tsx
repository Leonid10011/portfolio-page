import { Item } from "./ProjectView";

export default function ProjectInfo({infoItems} : {
    infoItems: Item[]
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
    infoItem: Item
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