// import React, { useState, useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import './Contact.css';

// const Contact = () => {
//   const formRef = useRef(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     gsap.from(formRef.current, {
//       opacity: 0,
//       y: 30,
//       duration: 1,
//       ease: 'power3.out',
//       delay: 0.3,
//     });
//   }, []);

//   const validate = () => {
//     const errs = {};
//     if (!formData.name.trim()) errs.name = 'Name is required';
//     if (!formData.email.trim()) {
//       errs.email = 'Email is required';
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
//     ) {
//       errs.email = 'Invalid email address';
//     }
//     if (!formData.message.trim()) errs.message = 'Message is required';
//     return errs;
//   };

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: '' });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length === 0) {
//       setSubmitted(true);
//       setFormData({ name: '', email: '', message: '' });
//       setErrors({});
//       // Here you could integrate email sending (e.g., EmailJS or backend API)
//     } else {
//       setErrors(validationErrors);
//       setSubmitted(false);
//     }
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <h2 className="contact-title">Get In Touch</h2>
//       <form
//         ref={formRef}
//         className="contact-form"
//         onSubmit={handleSubmit}
//         noValidate
//       >
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Your name"
//           value={formData.name}
//           onChange={handleChange}
//           className={errors.name ? 'error' : ''}
//         />
//         {errors.name && <p className="error-msg">{errors.name}</p>}

//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="your.email@example.com"
//           value={formData.email}
//           onChange={handleChange}
//           className={errors.email ? 'error' : ''}
//         />
//         {errors.email && <p className="error-msg">{errors.email}</p>}

//         <label htmlFor="message">Message</label>
//         <textarea
//           name="message"
//           id="message"
//           placeholder="Your message here..."
//           rows="5"
//           value={formData.message}
//           onChange={handleChange}
//           className={errors.message ? 'error' : ''}
//         ></textarea>
//         {errors.message && <p className="error-msg">{errors.message}</p>}

//         <button type="submit" className="submit-btn">
//           Send Message
//         </button>

//         {submitted && (
//           <p className="success-msg">Thanks for reaching out! I’ll get back soon.</p>
//         )}
//       </form>
//     </section>
//   );
// };

// export default Contact;




// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="vanta-bg" id="vanta-bg"></div>

      <section className="contact-section">
        <h2 className="contact-title">Contact Me</h2>
        <form class="contact-form" action="https://formspree.io/f/xrbkbpwo" method="POST">
  <label for="name">Name</label>
  <input type="text" name="name" id="name" required placeholder="Your Name" />

  <label for="email">Email</label>
  <input type="email" name="email" id="email" required placeholder="Your Email" />

  <label for="message">Message</label>
  <textarea name="message" id="message" rows="5" required placeholder="Your Message"></textarea>

  <button type="submit" class="submit-btn">Send Message</button>
</form>

      </section>
    </div>
  );
};

export default Contact;
