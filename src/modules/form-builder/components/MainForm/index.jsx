// @flow
import React, { useState, useCallback } from 'react';
import { ConfigContainer } from 'modules/form-builder/components/ConfigContainer';
import { ResultContainer } from 'modules/form-builder/components/ResultContainer';
import { TabContainer } from 'modules/common/components/TabContainer';
import { TabButton } from 'modules/common/components/TabButton';
import styles from './style.local.less';

export function MainForm() {
    const [activeTab, setActiveTab] = useState('configJson');
    const handleSetActiveTabJson = useCallback(() => {
        setActiveTab('configJson');
    }, []);
    const handleSetActiveTabResult = useCallback(() => {
        setActiveTab('result');
    }, []);
    return (
        <div className={styles.mainForm}>
            <div className={styles.mainFormButtons}>
                <TabButton name="configJson" activeTab={activeTab} onClick={handleSetActiveTabJson} title="Config" />
                <TabButton name="result" activeTab={activeTab} onClick={handleSetActiveTabResult} title="Result" />
            </div>
            <div className={styles.mainFormRedactor}>
                <TabContainer activeTab={activeTab} name="configJson" component={ConfigContainer} />
                <TabContainer activeTab={activeTab} name="result" component={ResultContainer} />
            </div>
        </div>
    );
}
