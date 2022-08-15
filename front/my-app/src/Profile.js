import React from 'react';

import './Profile.css';

const Profile = () => {
  return (
    <div>
    <figure className="snip0057 red hover">
  <figcaption>
    <h2>Victoria <span>Pena</span></h2>
    <p>A voice crackles in Calvin's radio: "Enemy fighters at two o'clock!" "Roger. What should I do until then?"</p>
    {/* <div className="icons"><a href="#"><i className="ion-map" ></i></a><a href="#"><i className="ion-ios-list"></i></a><a href="#"><i className="ion-ios-telephone"></i></a></div> */}
  </figcaption>
  <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg" alt="sample4"/></div>
  <div className="position">Illustrator</div>
</figure>
<figure className="snip0057 blue">
  <figcaption>
    <h2>Tiffany <span>Case</span></h2>
    <p>That's the whole problem with science. You've got a bunch of empiricists trying to describe things of unimaginable wonder.</p>
    {/* <div className="icons"><a href="#"><i className="ion-ios-color-filter"></i></a><a href="#"><i className="ion-beer"></i></a><a href="#"><i className="ion-ios-trash-outline"></i></a></div> */}
  </figcaption>
  <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg" alt="sample3"/></div>
  <div className="position">Software Engineer</div>
</figure>


</div>
  )
}

export default Profile