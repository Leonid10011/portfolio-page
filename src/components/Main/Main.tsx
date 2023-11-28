import { useState } from "react";
import ProjectView, { Item } from "../ProjectView/ProjectView";
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

const projectItems = [
    {
        id: 0,
        info: [{
            id: 0,
            title: "Name",
            text: "Project 1"
        },
        {
            id:1,
            title: "Tech used",
            text: "Description Tiiiiiiittt sssssssssssssssssssssss ssssffff"
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
        }]
    },
    {
        id: 1,
        info: [{
            id: 0,
            title: "Name",
            text: "Project 2"
        },
        {
            id:1,
            title: "Tech used",
            text: "Description Tiiiiiiittt sssssssssssssssssssssss ssssffff"
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
        }]
    },

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
        text: "Description Tiiiiiiittt sssssssssssssssssssssss ssssffff"
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
    // Get the id and info from one project
    const names: Item[] = projectItems.map(item => {
        const nameInfo = item.info.find(infoItem => infoItem.title === "Name");
        return {id: item.id,  name: nameInfo!.text};
    });

    return(
        <>
            <SelectBar items={names} selectTab={setActiveTab}/>
            <ProjectView infoItems={projectItems[activeTab].info}/>
        </>
    );
}