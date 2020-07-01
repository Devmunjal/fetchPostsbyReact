import React,{Component} from "react";
import axios from 'axios'
class Posts extends Component{
constructor(props) {
    super(props)
    this.state={
        posts:[]
    }
}
componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
            this.setState({posts:response.data})})
        .catch(error=>{
            console.log(error)
        })
}
render() {
    const {posts} = this.state
    return(
        <div>
            <h2> List Of Posts </h2>
            {
                posts.length?
                    posts.map(post=><div key={post.id} style={{border:'1px solid',borderRadius:'8px',margin:'1%'}}><p>Title : {post.title}</p>
                    <p>Body : {post.body}</p></div>):null
            }
        </div>
    )
}
}
export default Posts