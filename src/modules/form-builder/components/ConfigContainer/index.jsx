import { ExtButton } from '@sencha/ext-react-modern';
import React from 'react';
import styles from './style.local.less';

export function ConfigContainer() {
    return (
        <div className={styles.configContainer}>
            <textarea className={styles.configContainerTextArea} />
            <div className={styles.configContainerSubmit}>
                <ExtButton text="Apply" shadow="true" />
            </div>
        </div>
    );
}
// {
 //items: [{
//label: 'count',
//type: 'number',
//}]
//}
