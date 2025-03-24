import { FC, ReactNode, createContext, useState } from "react";
import TabsPanel from "./TabsPanel";

// Context
type TabsContext = {
    activeTab: number;
    setActiveTab: (tab: number) => void;
}
export const TabsContext = createContext<TabsContext>(null!);


// Context Provider
type TabsProps = {
    children: ReactNode;
}

type TabsComponent = FC<TabsProps> & { Panel: typeof TabsPanel };

const Tabs: TabsComponent = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="flex border-b-1 border-gray-300">
                {children}
            </div>
        </TabsContext.Provider>
    );
}

Tabs.Panel = TabsPanel;
export default Tabs;