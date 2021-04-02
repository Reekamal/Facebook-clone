import React,{useState,useEffect} from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from "./MessageSender"
import Post from './Post'
import { useStateValue } from './StateProvider';
import db from './firebase'


function Feed() {  {/*StoryReel(stories inside),Message Sender, */}
const [posts, setPosts] = useState([]);

useEffect (() =>{
    db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map((doc) => ({id:doc.id,data:doc.data()})))
    );

},[]);
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            {posts.map(post =>(
                <Post key={post.data.id}
                profilePic ={post.data.profilePic}
                message={post.data.message}
                timestamp={post.data.timestamp}
                username={post.data.username}
                image={post.data.image}
                />
            ))}
            {/*
            <Post profilePic="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
             message="Hare Krsna"
             timestamp="Saturday"
             username="kamal"
            image="https://images.unsplash.com/photo-1561176162-0b01b0df76ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
             <Post profilePic="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
             message="Hare Krsna"
             timestamp="Saturday"
             username="kamal"
            image="https://images.unsplash.com/photo-1528293319334-2b98c83a27fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
             <Post profilePic="https://images.unsplash.com/photo-1590228947498-a2a86df7b19d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
             message="Hare Krsna"
             timestamp="Saturday"
             username="kamal"
            image="https://images.unsplash.com/photo-1567878673942-be055fed5d30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            */}
             
             
           
            
        </div>
    );
}

export default Feed
