import React from 'react';

import StreamListItem from './StreamListItem';

const StreamList = props => {
    const streamItems = props.streams.map(item => {
        return(
            <StreamListItem
            stream_item={item}
            key={item.stream._id}
             />
        )
    });

    return (
        <ul className="list-group">
            {streamItems}
        </ul>
    )
}

export default StreamList;