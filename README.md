# form-builder-extjs
form builder in extreact.js. 
Enter the basic config to create form.

### Install and Usage

To install dependencies
```sh
$ npm i 
```
To run development mode
```sh
$ npm run dev
```
To run build mode
```sh
$ npm run build
```
Basic config 

```sh
{
    items: [
        { type: 'text', label: 'Enter text' },
        { type: 'checkBox', boxLabel: 'checkBox', checked: true, disabled: true },
    ],
    title: 'formName', 
    buttons: { save: { text: 'Save' }, cancel: { text: 'Cancel' }}
}
```

### Used components
| Components | Attributes |
| ------ | ------ |
| numberField | type: 'number', label: 'Enter number' |
| textField | type: 'text', label: 'Enter text' |
| checkBox | type: 'checkBox', boxLabel: 'checkBox', checked: true, disabled: true |
| textArea | type: 'textArea', label: 'Enter text', placeholder: 'something' |
| dateField | type: 'date', label: 'Enter date' |
| radioButton | type: 'radio', boxLabel: 'disabled radio',  disabled: true |
