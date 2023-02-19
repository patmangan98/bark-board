import CommentBody from "./CommentBody"


export default function ShowComment({ postComment }) {
    console.log(postComment)
    let commentArr = postComment.map((comment) => <CommentBody text ={comment.text}/> )



    return(
        <div>
            <p>{commentArr}</p>
        </div>
    )
}