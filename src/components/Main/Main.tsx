import { useState } from "react";
import ProjectView from "../ProjectView/ProjectView";
import SelectBar from "../SelectBar/SelectBar";

/**
 * This component is rendered on the home page and contains a Overview of the projects
 */

const items = [
    {
        id:0,
        name: "test 1"
    }, {
        id: 1,
        name: "test 2"
    }, {
        id: 2,
        name: "test 3"
    }
  ]

const infoItems = [
    {
        id: 0,
        title: "Name",
        text: "Description"
    },
    {
        id:1,
        title: "Tech used",
        text: "Description\nTesting multiple linefffffffffffffffffffffffffffffffffffffffffffffffffs"
    },
    {
        id:2,
        title: "Description",
        text: "Description"
    },
    {
        id:3,
        title: "Github",
        text: "Description"
    }
]


export default function Main(){
    const [activeTab, setActiveTab] = useState<number>(0);

    return(
        <>
            <SelectBar items={items} selectTab={setActiveTab}/>
            <ProjectView infoItems={infoItems}/>
        </>
    );
}