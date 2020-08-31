// @flow
import React from 'react';
import { createFormElementsFromJson } from 'modules/form-builder/helpers';
import styles from './style.local.less';

type TProps = {
    configJson: string
}

export function ResultContainer({ configJson }): TProps {
    if (!configJson) {
        return null;
    }
    const formItems = createFormElementsFromJson(configJson);
    return (
        <div className={styles.resultContainer}>{formItems}</div>
    );
}
