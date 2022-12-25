import "./profile_view.scss";
import profile_image from "/src/assets/Logo (3).svg";

export default function ProfileView() {
  return (
    <div className="ProfileView">
      <div className="profile_details">
        <img src={profile_image} alt="" className="profile_image" />
        <h2 className="profile_name">@darkdevilxy</h2>
        <button className="subscribe">Subscribe</button>
      </div>
      <div className="profile_description">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          beatae labore natus velit! A quae esse amet corrupti aliquid ut nobis
          ratione quidem, totam quo voluptatem beatae est quod inventore?
        </p>
      </div>
    </div>
  );
}
