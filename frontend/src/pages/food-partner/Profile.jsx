// import React, { useEffect, useState } from "react";
// import "../../styles/profile.css";
// import { useParams } from "react-router-dom";
// import axios from "axios";


// const Profile = () => {
//     const {id} = useParams()
//     const [profile,setProfile] = useState(null)
//     // const videos = Array.from({length:9},(_,i) => ({id:i+1}))
// //   const [profileData] = useState({
// //     businessName: "Pizza Paradise",
// //     address: "123 Food Street, Downtown",
// //     totalMeals: 43,
// //     customerServed: "15K",
// //     avatar: "/images/placeholder-avatar.jpg",
// //     videos: Array(9)
// //       .fill(null)
// //       .map((_, i) => ({
// //         id: i + 1,
// //         thumbnail: `/videos/video${i + 1}.mp4`,
// //       })),
// //   });


// // useEffect(()=>{
// //     axios.get(`http://localhost:3000/api/food-partner/${id}`,{withCredentials:true})
// //     .then(response=>{
// //         setProfile(response.data.foodPartner)
// //     })
// // },[id])


// useEffect(() => {
//   axios
//     .get(`http://localhost:3000/api/food-partner/${id}`, {
//       withCredentials: true,
//     })
//     .then((response) => {
//       setProfile(response.data.foodPartner);
//     })
//     .catch((err) => {
//       console.error("Profile fetch error:", err);
//     });
// }, [id]);


//   return (
//     <div className="profile-container">
//       {/* Header Section */}
//       <div className="profile-header">
//         <div className="header-content">
//           {/* Avatar */}
//           <div className="avatar-section">
//             <div className="avatar">
//               {/* <img src={profile.avatar} alt={profile.name} /> */}
//             </div>
//           </div>

//         {/* Info Section */}
//           <div className="info-section">
//             <div className="business-info">
//              <input
//                 type="text"
//                 className="business-name-input"
//                 value={profile?.name}
//                 readOnly
//               />
//               <input
//                 type="text"
//                 className="address-input"
//                 value={profile?.address}
//                 readOnly
//               />
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="stats-section">
//           <div className="stat-divider"></div>
//           <div className="stats-container">
//             <div className="stat-item">
//               <p className="stat-label">total meals</p>
//               <p className="stat-value">{profile?.totalMeals}</p>
//             </div>
//             <div className="stat-item">
//               <p className="stat-label">customer serve</p>
//               <p className="stat-value">{profile?.customerServed}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Video Grid Section */}
//       <div className="video-grid-section">
//         <div className="video-grid">
//           {profile?.videos.map((video) => (
//             <div key={video.id} className="video-item">
//               <video className="video-placeholder" controls>
//                 <source src={video.thumbnail} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;



import React, { useState, useEffect, use } from 'react'
import '../../styles/profile.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
    const { id } = useParams()
    const [ profile, setProfile ] = useState()
    const [ videos, setVideos ] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
            .then(response => {
                setProfile(response.data.foodPartner)
                setVideos(response.data.foodPartner.foodItems)
            })
    }, [ id ])


    return (
        <main className="profile-page">
            <section className="profile-header">
                <div className="profile-meta">

                    <img className="profile-avatar" src="https://images.unsplash.com/photo-1754653099086-3bddb9346d37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    <div className="profile-info">
                        <h1 className="profile-pill profile-business" title="Business name">
                            {profile?.name}
                        </h1>
                        <p className="profile-pill profile-address" title="Address">
                            {profile?.address}
                        </p>
                    </div>
                </div>

                <div className="profile-stats" role="list" aria-label="Stats">
                    <div className="profile-stat" role="listitem">
                        <span className="profile-stat-label">total meals</span>
                        <span className="profile-stat-value">{profile?.totalMeals}</span>
                    </div>
                    <div className="profile-stat" role="listitem">
                        <span className="profile-stat-label">customer served</span>
                        <span className="profile-stat-value">{profile?.customersServed}</span>
                    </div>
                </div>
            </section>

            <hr className="profile-sep" />

            <section className="profile-grid" aria-label="Videos">
                {videos.map((v) => (
                    <div key={v.id} className="profile-grid-item">
                        {/* Placeholder tile; replace with <video> or <img> as needed */}


                        <video
                            className="profile-grid-video"
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            src={v.video} muted ></video>


                    </div>
                ))}
            </section>
        </main>
    )
}

export default Profile