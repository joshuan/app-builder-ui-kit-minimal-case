import React from 'react';

export function Text(props: React.PropsWithChildren<{}>) {
    return <h1>{props.children}</h1>;
}
