import React, { useState, useCallback } from 'react';
import { ConfigContainer } from 'modules/form-builder/components/ConfigContainer';
import { ResultContainer } from 'modules/form-builder/components/ResultContainer';
import { TabContainer } from 'modules/common/components/TabContainer';
import { TabButton } from 'modules/common/components/TabButton';
import { TAB_CONFIG, TAB_RESULT } from 'modules/form-builder/constants';
import styles from './style.local.less';

export function MainForm() {
    const [activeTab, setActiveTab] = useState(TAB_CONFIG);
    const [configJson, setConfigJson] = useState('');
    const handleSetActiveTabJson = useCallback(() => {
        setActiveTab(TAB_CONFIG);
    }, []);
    const handleSetActiveTabResult = useCallback(() => {
        setActiveTab(TAB_RESULT);
    }, []);
    const handleSuccessParseJson = useCallback((config) => {
        setActiveTab(TAB_RESULT);
        setConfigJson(config);
    }, []);
    return (
        <div className={styles.mainForm}>
            <div className={styles.mainFormButtons}>
                <TabButton name={TAB_CONFIG} activeTab={activeTab} onClick={handleSetActiveTabJson} title="Config" />
                <TabButton name={TAB_RESULT} activeTab={activeTab} onClick={handleSetActiveTabResult} title="Result" />
            </div>
            <div className={styles.mainFormRedactor}>
                <TabContainer handleSuccessParseJson={handleSuccessParseJson} activeTab={activeTab} name={TAB_CONFIG} component={ConfigContainer} />
                <TabContainer configJson={configJson} activeTab={activeTab} name={TAB_RESULT} component={ResultContainer} />
            </div>
        </div>
    );
}
