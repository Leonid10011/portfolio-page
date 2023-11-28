/**
 * This component is a list of clickable tabs, which will control which project is showed in the main content view
 */

import { Item } from "../ProjectView/ProjectView";

/**
 * 
 * @param items: An array of items which should be displayed in the selected Bar.
 * @param selectItem: A function that sets the selected item. Pop drilling from parent
 */
export default function SelectBar({items, selectTab}: {
    items: Item[],
    selectTab: (id: number) => void
}){
    return(
        <div className="flex relative bg-black text-white h-12 border-b-2 border-black">
            {items.map( item => (
                <SelectItem item={item} key={item.id} handleSelection={selectTab}/>
            ))}
        </div>
    );
}

function SelectItem({item, handleSelection}: {
    item: Item,
    handleSelection: (id: number) => void
}){
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const id = Number(e.currentTarget.dataset.id);
        if(id !== null){
            handleSelection(id);
        }
    }

    return(
        <div  className="border-2 border-white w-full text-center" onClick={onClick} data-id={item.id}>
            {item.name}
        </div>
    );
}