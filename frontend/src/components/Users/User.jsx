import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useSearchOneUser from '../../hooks/useSearchOneUser';
import Navbar from '../Navbar/Navbar';
import Header from '../header/Header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const User = (props) => {

  const params = useParams();
  const authUser = useSelector(state => state.auth.authUser);
  const navigate = useNavigate();

  const { loading, searchUser, getSerchedUser } = useSearchOneUser();


  useEffect(() => {

    searchUser(params.username);

  }, []);

  const messageUser = (val) => {
    navigate(`/send/${val}`);
  }

  return (
    <>
      <div className="main">
        <div className='user'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className='user-data'>
              <div className="user-1">
                <div className="user-profilePic">
                  <img src={getSerchedUser.profilePic} alt="" />
                </div>
                <div className="follow">
                  <button className="posts">
                    <span>2.5K</span>
                    <h4>posts</h4>
                  </button>
                  <button className="followers">
                    <span>-1</span>
                    <h4>followers</h4>
                  </button>
                  <button className="following">
                    <span>6.8T</span>
                    <h4>following</h4>
                  </button>
                </div>
              </div>
              <div className="user-2">
                <h3>{getSerchedUser.name}</h3>
                <p>Bio</p>
              </div>
              <div className="user-3">
                {
                  getSerchedUser.username === authUser.username ? (
                    <>
                      <button className="user-edit-btn">Edit profile</button>
                      <button className='user-share-btn'>Share profile</button>
                    </>
                  ) : (
                    <>
                      <button className="user-edit-btn">Follow</button>
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
