import React, { useState } from "react";
import { chevronDown } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import SidebarMoreinfo from "./Sidebar/SidebarMoreinfo";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? "active" : ""}`}>
      <div class="sidebar-info">
        <figure class="avatar-box">
          <img src="hero-image.png" alt="Manish Sharma" width="80" />
        </figure>

        <div class="info-content">
          <h1 class="name" title="kuldip singh rathore">
            Kuldip Singh Rathore
          </h1>

          <p class="title">Web developer</p>
        </div>

        <button onClick={toggleClass} class="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          <IonIcon className="block sm:hidden" icon={chevronDown} />
        </button>
      </div>

      <SidebarMoreinfo />
    </div>
  );
};

export default Sidebar;
