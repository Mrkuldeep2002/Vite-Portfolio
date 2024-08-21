import { IonIcon } from "@ionic/react";
import { paperPlane } from "ionicons/icons";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import toast, { Toaster } from 'react-hot-toast';

const Contact = ({ isActive }) => {
  const {register, reset, handleSubmit} = useForm();

  const [isSuccess, setIsSuccess] = useState(false);
  const [result, setResult] = useState(null);

  // const accessKey = "4d36dd05-fdf6-45ad-b5a8-71562b42eab4";
   const accessKey = import.meta.env.VITE_EMAIL_ACCESS_KEY;

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "react portfolio",
      subject: "New Contact Message from your Website",
      // ... other settings
    },
    onSuccess: (msg, data) => {
      // Show a loading toast
      const loadingToastId = toast.loading('Sending email...');
  
      // Simulate a delay before showing the success message
      setTimeout(() => {
          // Update the loading toast to a success toast
          toast.success('Message sent successfully', {
              id: loadingToastId, // This replaces the loading toast with the success message
          });
  
          // Reset the form
          reset();
  
          // Set the success state
          setIsSuccess(true);
          setResult(msg);
      }, 2000); // 2 seconds delay, adjust as needed
  },
  
  onError: (msg, data) => {
      const loadingToastId = toast.loading('Sending email...');
  
      // Simulate a delay before showing the error message
      setTimeout(() => {
          // Update the loading toast to an error toast
          toast.error('Failed to send message', {
              id: loadingToastId, // This replaces the loading toast with the error message
          });
  
          // Set the error state
          setIsSuccess(false);
          setResult(msg);
      }, 2000); // 2 seconds delay, adjust as needed
  },
  });


  return (
    <article className={`contact ${isActive ? "active" : ""}`}>
      <Toaster/>
      <header>
        <h2 class="h2 article-title">Contact</h2>
      </header>

      <section class="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28450.277753619943!2d75.70867340133404!3d26.957881545581508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3d873c03457%3A0x5d84e5c0cb3cfa79!2sShree%20Shyam%20Apartment!5e0!3m2!1sen!2sin!4v1723785826746!5m2!1sen!2sin"
            width="400"
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section class="contact-form">
        <h3 class="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit(onSubmit)} class="form" >
          <div class="input-wrapper">
            <input
              type="text"
              name="fullname"
              class="form-input"
              placeholder="Full name"
              {...register("name", { required: true })}
            />

            <input
              type="email"
              name="email"
              class="form-input"
              placeholder="Email address"
              {...register("email", { required: true })}
            />
          </div>

          <textarea
            name="message"
            class="form-input"
            placeholder="Your Message"
            {...register("message", { required: true })}
          ></textarea>

          <button class="form-btn" type="submit" >
            <IonIcon icon={paperPlane} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
