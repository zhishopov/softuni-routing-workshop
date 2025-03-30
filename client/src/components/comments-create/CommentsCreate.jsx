import commentService from "../../services/commentService";

export default function CommentsCreate({ email, gameId, onCreate }) {
  const commentAction = async (formData) => {
    const comment = formData.get("comment");

    const createdComment = await commentService.create(email, gameId, comment);

    console.log(createdComment);
    onCreate(createdComment);
  };

  return (
    <>
      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" action={commentAction}>
          <textarea
            name="comment"
            placeholder="Comment......"
            defaultValue={""}
          />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />
        </form>
      </article>
    </>
  );
}
