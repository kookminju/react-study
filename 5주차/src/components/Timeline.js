import React from 'react';
import {Feed} from "../components/Feed";
import './Timeline.css';

export const Timeline = (props) => {
    return props.feeds.map(feed => <Feed name={feed.owner} body={feed.content} />)
};