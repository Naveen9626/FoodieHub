import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${formData.name}! We will contact you soon.`);

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">

      <div className="contact-header">
        <p>GET IN TOUCH</p>
        <h1>Contact FoodieHub 📞</h1>
        <span>
          Have a question? We'd love to hear from you.
        </span>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <span>📞</span>
            <div>
              <h3>Phone</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="info-card">
            <span>📧</span>
            <div>
              <h3>Email</h3>
              <p>hello@foodiehub.com</p>
            </div>
          </div>

          <div className="info-card">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Chennai, Tamil Nadu</p>
            </div>
          </div>

          <div className="info-card">
            <span>🕐</span>
            <div>
              <h3>Opening Hours</h3>
              <p>10:00 AM – 11:00 PM</p>
            </div>
          </div>

        </div>

        <form
          className="contact-form professional-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          />

          <button type="submit">
            Send Message 🚀
          </button>
        </form>

      </div>

    </section>
  );
}

export default Contact;