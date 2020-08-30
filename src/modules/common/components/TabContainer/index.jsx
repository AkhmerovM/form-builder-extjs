// @flow
import React from 'react';

type TProps = {
    Component: React$Component,
    activeTab: 'result' | 'configJson',
    name: string,
    configJson?: string,
    handleSuccessParseJson?: () => void,
};
export function TabContainer(props): TProps {
    const {
        activeTab, component, name, ...rest
    } = props;
    const Component = component;
    if (activeTab !== name) {
        return false;
    }
    return <Component {...rest} />;
}
