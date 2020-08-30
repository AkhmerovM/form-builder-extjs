import {
    ExtRadiofield,
    ExtTextfield,
    ExtTextareafield,
    ExtDatepickerfield,
    ExtCheckboxfield,
    ExtNumberfield,
    ExtFormpanel,
} from '@sencha/ext-react-modern';
import React from 'react';
import { COMPONENTS } from 'modules/form-builder/constants';

function getProps(item, index) {
    return Object.keys(item).reduce((result, key) => {
        if (key === 'type') {
            return result;
        }
        return {
            ...result,
            [key]: item[key],
            key: index,
        };
    }, {});
}
function getFormProps(title, buttons) {
    return {
        title: title || '',
        buttons: { ...buttons } || {},
        standardSubmit: true,
    };
}
const configComponents = {
    [COMPONENTS.checkBox]: ExtCheckboxfield,
    [COMPONENTS.radio]: ExtRadiofield,
    [COMPONENTS.text]: ExtTextfield,
    [COMPONENTS.date]: ExtDatepickerfield,
    [COMPONENTS.number]: ExtNumberfield,
    [COMPONENTS.textArea]: ExtTextareafield,
};
export function createFormElementsFromJson(jsonConfig) {
    const { items, title, buttons } = jsonConfig;
    const array = [];
    items.forEach((item, index) => {
        const node = React.createElement(configComponents[item.type], getProps(item, index), null);
        array.push(node);
    });
    return React.createElement(ExtFormpanel, getFormProps(title, buttons), array);
}
