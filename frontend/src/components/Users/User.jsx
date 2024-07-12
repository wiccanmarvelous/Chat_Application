import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useSearchOneUser from '../../hooks/useSearchOneUser';
import Navbar from '../Navbar/Navbar';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';

const User = (props) => {

  const params = useParams();
  const authUser = useSelector(state => state.auth.authUser);
  const navigate = useNavigate();

  const { loading: searchLoading, searchUser, getSerchedUser } = useSearchOneUser();
  const { loading: logoutLoading, logout } = useLogout();

  useEffect(() => {

    searchUser(params.username);

  }, []);

  const messageUser = (val) => {
    navigate(`/send/${val}`);
  }

  const styleLabel = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }

  return (
    <>
      <div className="main">
        <div className='user'>
          {searchLoading ? (
            <h2 style={styleLabel}>Loading...</h2>
          ) : (
            <div className='user-data'>
              <div className="user-1">
                <div className="user-profilePic">
                  <img src={getSerchedUser.profilePic} alt="" />
                </div>
                {/* <div className="follow">
                  <button className="posts">
                    <span>{getSerchedUser.postsCount}</span>
                    <h4>posts</h4>
                  </button>
                  <button className="followers">
                    <span>{getSerchedUser.followersCount}</span>
                    <h4>followers</h4>
                  </button>
                  <button className="following">
                    <span>{getSerchedUser.followingCount}</span>
                    <h4>following</h4>
                  </button>
                </div> */}
              </div>
              <div className="user-2">
                <h3>{getSerchedUser.name}</h3>
                {/* <p>{getSerchedUser.bio}</p> */}
              </div>
              <div className="user-3">
                {
                  getSerchedUser.username === authUser.username ? (
                    <>
                      {/* <button onClick={() => navigate('/user/edit')} className="user-edit-btn">Edit profile</button> */}
                      <button onClick={logout} className='user-share-btn'>Logout</button>
                    </>
                  ) : (
                    <>
                      {/* <button className="user-edit-btn">Follow</button> */}
                      <button onClick={() => messageUser(getSerchedUser.username)} className='user-share-btn'>Message</button>
                    </>
                  )
                }
              </div>
              <div className="user-4">

              </div>
            </div>
          )
          }
        </div>
      </div>
      <Navbar />
    </>
  )
}

export default User
