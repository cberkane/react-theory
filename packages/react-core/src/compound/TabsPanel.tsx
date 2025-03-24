import { FC, ReactNode, useContext } from 'react';
import { TabsContext } from './Tabs';

type TabsPanelProps = {
    index: number;
    onClick?: () => void;
    children: ReactNode;
}

const TabsPanel: FC<TabsPanelProps> = ({ index, children, onClick }) => {
    const context = useContext(TabsContext);
    const isActive = context.activeTab === index;

    const handleClick = () => {
        context.setActiveTab(index);
        onClick?.();
    }

    return (
        <div
            onClick={handleClick}
            className={`pointer cursor-pointer py-2 px-4 text-center transition ${isActive ? 'bg-gray-200 border-b-1' : 'bg-gray-100'}`} >
            {children}
        </div >
    );
}

export default TabsPanel;