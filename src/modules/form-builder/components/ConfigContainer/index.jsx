// @flow
import { ExtButton } from '@sencha/ext-react-modern';
import React, { useCallback, useRef, useState } from 'react';
import Ajv from 'ajv';
import JSON5 from 'json5';
import { schema, INITIAL_CONFIG_JSON } from 'modules/form-builder/constants';
import styles from './style.local.less';

const ajv = new Ajv({ $data: true });

type TProps = {
    handleSuccessParseJson: () => void,
}

export function ConfigContainer({ handleSuccessParseJson }): TProps {
    function beautifyErrors(errors) {
        return errors.map((error, i) => (
            <div key={i}>
                Error#
                {i}
                <div>
                    <span>position: </span>
                    <span>{error.dataPath}</span>
                </div>
                <div>
                    <span>message: </span>
                    <span>{error.message}</span>
                </div>
            </div>
        ));
    }
    const textAreaRef = useRef();
    const initialConfig = localStorage.getItem('configJson') || INITIAL_CONFIG_JSON;
    const [configJson, setConfigJson] = useState(initialConfig);
    const [error, setError] = useState(false);
    const handleValidateJson = useCallback(() => {
        const { value } = textAreaRef.current;
        try {
            const parsedToJsonValue = JSON5.parse(value);
            const valid = ajv.validate(schema, parsedToJsonValue);
            if (!valid) {
                console.warn('SchemaError', ajv.errors);
                setError(beautifyErrors(ajv.errors));
            } else {
                handleSuccessParseJson(parsedToJsonValue);
            }
        } catch (e) {
            const parseError = e.message;
            console.warn('JSONParseError', parseError);
            setError(parseError);
        }
    }, []);
    const handleChangeTextArea = useCallback((e) => {
        const text = e.target.value;
        setError(null);
        setConfigJson(text);
        localStorage.setItem('configJson', text);
    }, []);
    return (
        <div className={styles.configContainer}>
            <div className={styles.configContainerContent}>
                <textarea ref={textAreaRef} onChange={handleChangeTextArea} value={configJson} className={styles.configContainerTextArea} />
                <div className={styles.configContainerSubmit}>
                    <ExtButton disabled={error} ui="action" handler={handleValidateJson} text="Apply" shadow="true" />
                </div>
                <div className={styles.configContainerError}>
                    {error}
                </div>
            </div>
        </div>
    );
}
