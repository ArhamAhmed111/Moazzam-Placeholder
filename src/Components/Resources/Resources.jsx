import React from 'react';
import { Link } from 'react-router-dom';
import { FaPen, FaUser, FaComments, FaImages, FaListAlt } from 'react-icons/fa'; // Importing relevant icons
import './Resources.css'; // Make sure the CSS file is linked

const Resources = () => {
  return (
    <div className='resources-section'>
      <h1>Resources</h1>
      <div className='para'>
        <p>JSONPlaceholder comes with a set of 6 common resources:</p>
      </div>
      
      <div className='resource-item'>
        <Link to='https://moazzam-api.vercel.app/posts' className='resource-link'>
          <FaPen className='resource-icon' /> /posts
        </Link>
        <p>100 posts</p>
      </div>

      <div className='resource-item'>
        <Link to='https://moazzam-api.vercel.app/users' className='resource-link'>
          <FaUser className='resource-icon' /> /users
        </Link>
        <p>10 users</p>
      </div>

      <div className='resource-item'>
        <Link to='https://moazzam-api.vercel.app/comments' className='resource-link'>
          <FaComments className='resource-icon' /> /comments
        </Link>
        <p>500 comments</p>
      </div>

      <div className='resource-item'>
        <Link to='https://moazzam-api.vercel.app/albums' className='resource-link'>
          <FaImages className='resource-icon' /> /albums
        </Link>
        <p>100 albums</p>
      </div>

      <div className='resource-item'>
        <Link to='https://moazzam-api.vercel.app/photos' className='resource-link'>
          <FaImages className='resource-icon' /> /photos
        </Link>
        <p>5000 photos</p>
      </div>

      <div className='resource-item'>
        <Link to='https://moazzam-api.vercel.app/todos' className='resource-link'>
          <FaListAlt className='resource-icon' /> /todos
        </Link>
        <p>200 todos</p>
      </div>
    </div>
  );
};

export default Resources;
