// //A single `Project` component that will be used multiple times in the Portfolio section
// import { useState, useEffect } from 'react';
// // Bringing in the required component from 'react-router-dom' for linking between pages
// import { Link } from 'react-router-dom';


export default function Container() {
    //     const [users, setUsers] = useState([]);

    //     const fetchData = async () => {
    //         const { data } = await API.getUsers();

    //         setUsers(data);
    //     };

    //     useEffect(() => {
    //         fetchData();
    //     }, []);

    //     // Iterate over each mock user to display their abridged profile data and a link to their page
    //     return (
    //         <div className="container pt-4">
    //             <ul className="list-group list-group">
    //                 {users.map((user) => (
    //                     <ListItem key={user.id}>
    //                         <Profile user={user} />
    //                         {/* Link elements are anchors under-the-hood, but they allow the routing behavior to be controlled by the client rather than the server */}
    //                         <Link
    //                             to={`/profile/${user.id}`}
    //                             className="badge bg-primary rounded-pill"
    //                         >
    //                             See More
    //                         </Link>
    //                     </ListItem>
    //                 ))}
    //             </ul>
    //         </div>
    //     );
}