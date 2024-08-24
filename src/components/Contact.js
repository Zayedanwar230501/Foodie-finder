

const Contact=()=>{
    return(
        <div >
      <h1>Contact Us</h1>

      <section >
        <h2>Get in Touch</h2>
        <p>We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.</p>
        <p>Email: support@swiggyclone.com</p>
        <p>Phone: +123 456 7890</p>
      </section>

      <section >
        <h2>Contact Form</h2>
        <form>
          <div >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div >
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div >
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;