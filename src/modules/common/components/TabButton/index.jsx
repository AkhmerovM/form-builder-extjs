// @flow
import React, { useCallback } from 'react';
import cn from 'classnames';
import styles from './style.local.less';

type TProps = {
    activeTab: 'result' | 'configJson',
    onClick: () => void,
    disabled?: boolean,
    title: string,
    name: string,
};
export function TabButton(props): TProps {
    const {
        title, onClick, activeTab, name,
    } = props;
    const isActive = activeTab === name;
    const handleKeyDown = useCallback((e) => {
        console.log(e.keyCode);
    }, []);
    return (
        <div onClick={onClick} onKeyDown={handleKeyDown} tabIndex="0" role="button" className={cn(styles.tabButton, { [styles.active]: isActive })}>
            {title}
        </div>
    );
}
