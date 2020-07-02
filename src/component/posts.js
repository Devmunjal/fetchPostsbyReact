import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

 
const styles = {
  bounceIn: {
    animation: 'x 6s',
    animationName: Radium.keyframes(fadeIn, 'bounceIn')
  }
}

function Posts() {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            setPosts(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])
  return (
      <StyleRoot>
    <div style={styles.bounceIn}>
            {
                posts.map(post=>(<div className="ui segment">
                <h4 className="ui right floated header">Post : {post.id}</h4>
                <div className="ui clearing divider"></div>
            <div ><h3>Title :</h3><p>{post.title}</p><h3>Discription :</h3><p>{post.body}</p></div>
              </div>))
                
            }
    </div>
    </StyleRoot>
  );
}

export default Posts;