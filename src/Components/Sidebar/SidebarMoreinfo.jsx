import { IonIcon } from '@ionic/react'
import { calendar, calendarOutline, locationOutline, logoGithub, logoInstagram, logoLinkedin, mailOutline, phonePortraitOutline } from 'ionicons/icons'
import React from 'react'

const SidebarMoreinfo = () => {
  return (
    <div class="sidebar-info_more">

        <div class="separator"></div>

        <ul class="contacts-list">

          <li class="contact-item">

            <div class="icon-box">
              
          <IonIcon className="block " icon={mailOutline} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Email</p>

              <a href="mailto:kuldeepsinghmertiya1996@gmail.com" class="contact-link">kuldeepsinghmertiya1996@gmail.com</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
            <IonIcon className="block " icon={phonePortraitOutline} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Phone</p>

              <a href="tel:+919929578931" class="contact-link">+91 9929578931</a>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
            <IonIcon className="block " icon={calendarOutline} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Birthday</p>

              <time datetime="1982-06-23">Jan 24, 2002</time>
            </div>

          </li>

          <li class="contact-item">

            <div class="icon-box">
            <IonIcon className="block " icon={locationOutline} />
            </div>

            <div class="contact-info">
              <p class="contact-title">Location</p>

              <address>Ganesh Nagar , Jhotwara Jaipur</address>
            </div>

          </li>

        </ul>

        <div class="separator"></div>

        <ul class="social-list">

          <li class="social-item">
            <a href="https://github.com/Mrkuldeep2002" target="_blank" class="social-link">
            
          <IonIcon className="block " icon={logoGithub} />
              <ion-icon name=""></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://www.linkedin.com/in/kuldip-singh-rathore-318924263/" target="_blank" class="social-link">
            
          <IonIcon className="block " icon={logoLinkedin} />
              <ion-icon name=""></ion-icon>
            </a>
          </li>

          <li class="social-item">
            <a href="https://www.instagram.com/kuldeep_singh.rathore" target="_blank" class="social-link">
            
          <IonIcon className="block " icon={logoInstagram} />
              <ion-icon name=""></ion-icon>
            </a>
          </li>

        </ul>

      </div>
  )
}

export default SidebarMoreinfo
