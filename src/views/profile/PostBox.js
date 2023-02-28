import React, { useState } from 'react'
import PostCard from '../../components/PostCard';
import '../../css/profile.css';
// import ShareIcon from '@mui/icons-material/Share';

const PostBox = () => {
    const [post, setPost] = useState('');
    const [data, setData] = useState([]);
    const uname = 'Amna';

    const handlePost = (e) => {
        setPost(e.target.value);
    }

    const submitPost = () => {
        const myobj = {
            name: uname,
            post: post,
        };
        setData([...data, myobj]);
        setPost('');
    }

    const deletePost = (id) => {
        setData(data.filter((_, i) => id !== i))
    }

    console.log(data);

    return (
        <>
            <div className='row post'>
                <div className='col-12 px-5 py-5 pb-3'>
                    <textarea className='form-control' type='text' rows='5' placeholder='type you post here...' value={post} onChange={handlePost} />
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success mt-3 me-3' onClick={submitPost}>Post</button>
                    </div>
                </div>
            </div>

            {data?.length !== 0 && data.map((item, index) => {
                return (
                    <PostCard {...item} key={index} id={index} deletePost={deletePost} />
                );
            })}
        </>
    )
}

export default PostBox
