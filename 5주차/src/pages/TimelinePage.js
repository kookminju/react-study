import React, {useEffect, useState} from 'react';
import {Feed} from "../components/Feed";
import {Write} from "../components/Write";
import {Timeline} from "../components/Timeline";
import {createFeed, readFeeds} from "./Server";

// async function createFeed(name, body) {
//     const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             owner: name,
//             content: body,
//         }),
//     });
//     console.log(await result.json());
// }
//
// async function readFeeds() {
//     const feedResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/', {
//         method: 'get',
//     });
//     return await feedResult.json();
// }

export function TimelinePage(props) {
    const [owner, setOwner] = useState("");
    const onChangeOwner = e => {
        setOwner(e.target.value);
    };
    const [content, setContent] = useState("");
    const onChangeContent = e => {
        setContent(e.target.value);
    };

    const [feeds, setFeeds] = useState([]);
    useEffect(() => {
        const server = async () => {
            setFeeds(await readFeeds());
        };
        server();
    }, []);

    async function writeFunc(){
        await createFeed(owner, content);
        setFeeds(await readFeeds());
    }

    return <>
        <Write
            readFeeds={readFeeds}
            setFeeds={setFeeds}
            setOwner={owner}
            setContent={content}
            onChangeOwner={onChangeOwner}
            onChangeContent={onChangeContent}
            writeFunc={writeFunc}
        />
        <Timeline
            feeds = {feeds}
        />
    </>;
}

export default TimelinePage;