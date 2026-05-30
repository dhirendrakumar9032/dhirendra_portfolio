import { useContext, useState } from "react";
import { Button, Form, Input, Spin, message } from "antd";
import { ArrowUpRight, BriefcaseBusiness, Clock3, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { sendEmail } from "./emailService";
import { NavigationContext } from "../../App";
import { ContactFormValues } from "../../utils/types";
import Footer from "./Footer";
import "./index.scss";

const contactHighlights = [
  "Senior Frontend roles",
  "React architecture",
  "Enterprise SaaS",
  "Performance-focused UI",
];

const Contact = () => {
  const [form] = Form.useForm();
  const [isEmailSent, setEmailSent] = useState<boolean>(false);
  const { isLightsEnabled } = useContext(NavigationContext);

  const onFinish = (values: ContactFormValues) => {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    if (
      typeof serviceID === "undefined" ||
      typeof templateID === "undefined" ||
      typeof userID === "undefined"
    ) {
      console.error("EmailJS configuration is missing");
      message.error("Cannot send email at this time. Please try again later.");
      return;
    }

    setEmailSent(true);
    sendEmail(serviceID, templateID, userID, values)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          message.success("Message sent successfully!");
          setEmailSent(false);
        },
        (err) => {
          console.log("FAILED...", err);
          message.error("Failed to send message.");
          setEmailSent(false);
        }
      )
      .finally(() => {
        form.resetFields();
      });
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="heading-container">
          <h2 className="heading">Contact Me</h2>
          <span className="underline"></span>
          <p className="section-intro">
            Have a role, product idea, or frontend challenge where strong
            ownership matters? Send a message and I will get back to you.
          </p>
        </div>
        <div className="contact-section">
          <div className="contact-info">
            <div className="contact-copy">
              <span className="availability-pill">
                <Sparkles />
                Open to senior frontend opportunities
              </span>
              <h3>Let&apos;s build interfaces that feel fast, clear, and reliable.</h3>
              <p>
                I am interested in teams working on meaningful SaaS, fintech,
                dashboards, design systems, and complex workflows where frontend
                quality directly shapes product trust.
              </p>
            </div>

            <div className="contact-card-grid">
              <a className="contact-card" href="mailto:dhirendra9032@gmail.com">
                <span className="contact-icon">
                  <Mail />
                </span>
                <span>
                  <strong>Email</strong>
                  <small>dhirendra9032@gmail.com</small>
                </span>
                <ArrowUpRight className="card-arrow" />
              </a>
              <a className="contact-card" href="tel:+918604390422">
                <span className="contact-icon">
                  <Phone />
                </span>
                <span>
                  <strong>Phone</strong>
                  <small>+91 8604390422</small>
                </span>
                <ArrowUpRight className="card-arrow" />
              </a>
              <div className="contact-card">
                <span className="contact-icon">
                  <MapPin />
                </span>
                <span>
                  <strong>Location</strong>
                  <small>Lucknow, India</small>
                </span>
              </div>
              <div className="contact-card">
                <span className="contact-icon">
                  <Clock3 />
                </span>
                <span>
                  <strong>Response</strong>
                  <small>Usually within 24 hours</small>
                </span>
              </div>
            </div>

            <div className="contact-highlights">
              {contactHighlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

          </div>
          <div
            className={`contact-form ${
              !isLightsEnabled && "contact-form-dark"
            }`}
          >
            <Form
              form={form}
              layout="vertical"
              className="form"
              onFinish={onFinish}
            >
              <div className="form-heading">
                <span>
                  <BriefcaseBusiness />
                  Start a conversation
                </span>
                <h2>Tell me what you are building</h2>
              </div>
              <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                  { required: true, message: "Please input your Full name!" },
                ]}
              >
                <Input placeholder="Your full name" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email." },
                ]}
              >
                <Input type="email" placeholder="you@example.com" />
              </Form.Item>
              <Form.Item label="Message" name="message">
                <Input.TextArea placeholder="Share the role, project, timeline, or challenge..." />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  {isEmailSent ? (
                    <Spin style={{ color: "white" }} />
                  ) : (
                    <>
                      <Send />
                      Send Message
                    </>
                  )}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
