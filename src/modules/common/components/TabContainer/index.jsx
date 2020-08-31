import React from 'react';

export function TabContainer(props) {
    const {
        activeTab, component, name, ...rest
    } = props;
    const Component = component;
    if (activeTab !== name) {
        return false;
    }
    return <Component {...rest} />;
}
