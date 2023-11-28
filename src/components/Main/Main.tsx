import { useState } from "react";
import ProjectView from "../ProjectView/ProjectView";
import SelectBar from "../SelectBar/SelectBar";

/**
 * This component is rendered on the home page and contains a Overview of the projects
 */
const items = [
    {
        id: 0,
        title: "Project 1",
        text: "Description 1"
    },
    {
        id:1,
        title: "Project 2",
        text: "Description 2\nTesting multiple linefffffffffffffffffffffffffffffffffffffffffffffffffs"
    },
    {
        id:2,
        title: "Project 3",
        text: "Description 3"
    },
]


export default function Main(){
    const [activeTab, setActiveTab] = useState<number>(0);

    return(
        <>
            <SelectBar items={items} selectTab={setActiveTab}/>
            <ProjectView infoItems={items}/>
        </>
    );
}