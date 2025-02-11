import React, { useState } from "react";
import ReactPlayer from "react-player";

const PostModal = (props) => {
  const [editorText, setEditorText] = useState("");
  const [assetArea, setAssetArea] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  return (
    <>
      <>
        {props.showModal && (
          <Container>
            <Content>
              <Header>
                <h2>Create a post</h2>
                <button>
                  <img src="/images/close-icon.svg" alt="" />
                </button>
              </Header>
              <ShareContent>
                <UserInfo>
                  {props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} alt="" />
                  ) : (
                    <img src="/images/user.svg" alt="" />
                  )}
                  <span>{props.user.displayName}</span>
                </UserInfo>
                <Editor>
                  <textarea
                    value={editorText}
                    onChange={(e) => setEditorText(e.target.value)}
                    placeholder="What do you want to talk about?"
                    autoFocus={true}
                  />
                  {assetArea === "image" ? (
                    <UploadImage>
                      <input
                        type="file"
                        name="image"
                        id="file"
                        style={{ display: "none" }}
                        onChange={handleChange}
                      />
                      <p>
                        <label
                          style={{
                            cursor: "pointer",
                            display: "block",
                            marginBottom: "15px",
                          }}
                          htmlFor="file"
                        >
                          Select an image to share
                        </label>
                      </p>
                      {shareImage && <img src="" alt="img" />}
                    </UploadImage>
                  ) : (
                    assetArea === "media" && (
                      <>
                        <input
                          style={{ width: "100%", height: "30px" }}
                          type="text"
                          value={videoLink}
                          onChange={(e) => setVideoLink(e.target.value)}
                          placeholder="Please input a video link"
                        />
                        {videoLink && (
                          <ReactPlayer width="100%" url={videoLink} />
                        )}
                      </>
                    )
                  )}
                </Editor>
              </ShareContent>
              <ShareCreation>
                <AttachAssets>
                  <AssetButton onClick={() => switchAssetArea("image")}>
                    <img src="/images/share-image.svg" alt="" />
                  </AssetButton>
                  <AssetButton onClick={() => switchAssetArea("media")}>
                    <img src="/images/share-video.svg" alt="" />
                  </AssetButton>
                </AttachAssets>
                <ShareComment>
                  <AssetButton>
                    <img src="/images/share-comment.svg" alt="" />
                    Anyone
                  </AssetButton>
                </ShareComment>
                <PostButton
                  onClick={(e) => handlePostArticles(e)}
                  disabled={!editorText ? true : false}
                >
                  Post
                </PostButton>
              </ShareCreation>
            </Content>
          </Container>
        )}
      </>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(PostModal);
