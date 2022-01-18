import {useEffect, useState} from 'react';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect( () => {
          fetch('https://jsonplaceholder.typicode.com/comments')
              .then(value => value.json())
              .then(value => setComments(value))
    }, []);
    return (
        <div>
            <ul>
                {
                    comments.map(value => <li key={value.id}>{value.name} {value.email}</li>)
                }

            </ul>
        </div>
    );
};

export default Comments;