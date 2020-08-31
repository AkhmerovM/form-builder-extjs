import React from 'react';
import cn from 'classnames';
import styles from './style.local.less';

export function TabButton(props) {
    const {
        title, onClick, activeTab, name,
    } = props;
    const isActive = activeTab === name;
    return (
        <div onClick={onClick} tabIndex="0" role="button" className={cn(styles.tabButton, { [styles.active]: isActive })}>
            {title}
        </div>
    );
}
