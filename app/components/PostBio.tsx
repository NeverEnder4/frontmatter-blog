import profileImage from "~/assets/images/profile-image.png"

function PostBio() {
  return (
    <article className="post-bio py-14">
      <div className="container">
        <img className="author-image" src={profileImage} alt="Tony Pettigrew" />
        <div className="bio">
          <h2 className="author-name">Tony Pettigrew</h2>
          <p className="author-description">
            I am a Web Developer with 4 years of professional experience using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JS</strong> and <strong>ReactJS</strong> among other technologies. When I'm not developing I enjoy creating music in my home studio.
          </p>
        </div>
      </div>
    </article>
  )
}

export default PostBio
