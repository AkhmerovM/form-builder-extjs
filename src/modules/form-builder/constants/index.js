export const TAB_CONFIG = 'configJson';
export const TAB_RESULT = 'result';

export const COMPONENTS = {
    textArea: 'textArea',
    text: 'text',
    date: 'date',
    checkBox: 'checkBox',
    number: 'number',
    radio: 'radio',
};

export const INITIAL_CONFIG_JSON = '{\n'
    + '  items: [\n'
    + "    { type: 'checkBox', boxLabel: 'checkBox' }, \n"
    + "    { type: 'checkBox', boxLabel: 'disabled', disabled: true }, \n"
    + "    { type: 'number', label: 'Enter number' }, \n"
    + "    { type: 'date', label: 'Enter date' }, \n"
    + "    { type: 'radio', boxLabel: 'radio' }, \n"
    + "    { type: 'text', label: 'Enter text' }, \n"
    + "    { type: 'textArea', label: 'Enter text', placeholder: 'something' }\n"
    + '  ], \n'
    + "  title: 'formName', \n"
    + "  buttons: { save: { text: 'Save' }, cancel: { text: 'Cancel' }}\n"
    + '}';

const textFieldSchema = {
    type: 'object',
    properties: {
        label: {
            type: 'string',
        },
        type: {
            type: 'string',
            const: COMPONENTS.text,
        },
        placeHolder: {
            type: 'string',
        },
        value: {
            type: 'string',
        },
    },
    required: ['label', 'type'],
};
const dateFieldSchema = {
    type: 'object',
    properties: {
        label: {
            type: 'string',
        },
        type: {
            type: 'string',
            const: COMPONENTS.date,

        },
        value: {
            type: 'string',
        },
    },
    required: ['label', 'type'],
};
const textAreaFieldSchema = {
    type: 'object',
    properties: {
        label: {
            type: 'string',
        },
        type: {
            type: 'string',
            const: COMPONENTS.textArea,

        },
        placeHolder: {
            type: 'string',
        },
        value: {
            type: 'string',
        },
    },
    required: ['label', 'type'],
};
const checkBoxFieldSchema = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            const: COMPONENTS.checkBox,

        },
        boxLabel: {
            type: 'string',
        },
        checked: {
            type: 'boolean',
        },
        disabled: {
            type: 'boolean',
        },
    },
    required: ['boxLabel', 'type'],
};
const radioFieldSchema = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            const: COMPONENTS.radio,

        },
        boxLabel: {
            type: 'string',
        },
        checked: {
            type: 'boolean',
        },
        disabled: {
            type: 'boolean',
        },
    },
    required: ['boxLabel', 'type'],
};
const numberFieldSchema = {
    type: 'object',
    properties: {
        label: {
            type: 'string',
        },
        width: {
            type: 'number',
        },
        type: {
            type: 'string',
            const: COMPONENTS.number,

        },
    },
    required: ['label', 'type'],
};
const buttonFormSchema = {
    type: 'object',
    patternProperties: {
        '.*': {
            type: 'object',
            properties: {
                text: {
                    type: 'string',
                },
            },
            required: ['text'],
        },
    },
};
export const schema = {
    type: 'object',
    properties: {
        items: {
            type: 'array',
            items: {
                anyOf: [
                    radioFieldSchema,
                    numberFieldSchema,
                    textFieldSchema,
                    textAreaFieldSchema,
                    checkBoxFieldSchema,
                    dateFieldSchema,
                ],
            },
            additionalProperties: false,
            minItems: 1,
        },
        title: {
            type: 'string',
        },
        buttons: buttonFormSchema,
    },
    required: ['items'],
};
