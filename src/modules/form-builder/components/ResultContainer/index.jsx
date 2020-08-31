import React from 'react';
import { createFormElementsFromJson } from 'modules/form-builder/helpers';
import styles from './style.local.less';

export function ResultContainer({ configJson }) {
    if (!configJson) {
        return null;
    }
    const formItems = createFormElementsFromJson(configJson);
    return (
        <div className={styles.resultContainer}>{formItems}</div>
    );
}
