// @flow
import React from 'react';

type TProps = {
    Component: React$Component,
    activeTab: 'result' | 'configJson',
    name: string,
};
export function TabContainer(props): TProps {
    const { activeTab, component, name } = props;
    const Component = component;
    if (activeTab !== name) {
        return false;
    }
    console.log(Component);
    return <Component />;
}
