import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const ME = {
  email: "golvintomy02@gmail.com",
  phone: "+91 8921151459",
  location: "Kochi, Kerala, India",
  socials: {
    github: {
      href: "https://github.com/Golvin-Tomy",
      label: "GitHub",
      Icon: Github,
    },
    twitter: { href: "", label: "Twitter", Icon: Twitter },
    instagram: { href: "", label: "Instagram", Icon: Instagram },
    linkedin: {
      href: "https://www.linkedin.com/in/golvin-tomy-aa1901244/",
      label: "LinkedIn",
      Icon: Linkedin,
    },
  },
};

const contactInfo = [
  { Icon: Mail, label: "Email", value: ME.email, href: `mailto:${ME.email}` },
  { Icon: Phone, label: "Phone", value: ME.phone, href: `tel:${ME.phone}` },
  { Icon: MapPin, label: "Location", value: ME.location, href: null },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mqeyoozq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setSent(false);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-3">
          Open to collaborations, freelance &amp; full-time roles
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="flex flex-col gap-6">
            {/* Contact details card */}
            <div
              className="
                bg-white/40 dark:bg-white/10
                backdrop-blur-lg
                border border-white/20 dark:border-white/10
                shadow-xl p-8 rounded-2xl
                transition-all duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's build something amazing
              </h3>

              <div className="space-y-5">
                {contactInfo.map(({ Icon, label, value, href }) => {
                  const inner = (
                    <div className="flex items-center gap-4 group">
                      <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-white/10 text-blue-500 dark:text-cyan-400 transition-transform group-hover:scale-110 duration-200">
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          {label}
                        </p>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {value}
                        </p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="block hover:opacity-80 transition"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={label}>{inner}</div>
                  );
                })}
              </div>
            </div>

            {/* Socials card */}
            <div
              className="
                bg-white/40 dark:bg-white/10
                backdrop-blur-lg
                border border-white/20 dark:border-white/10
                shadow-xl p-6 rounded-2xl
                transition-all duration-300
              "
            >
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Find me on
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.values(ME.socials).map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      bg-white/40 dark:bg-white/10
                      border border-white/20 dark:border-white/10
                      text-gray-700 dark:text-gray-300
                      hover:text-blue-500 dark:hover:text-cyan-400
                      hover:border-blue-300 dark:hover:border-cyan-400/40
                      text-sm font-medium
                      transition-all duration-200
                    "
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/*Contact Form */}
          <div
            className="
              bg-white/40 dark:bg-white/10
              backdrop-blur-lg
              border border-white/20 dark:border-white/10
              shadow-xl p-8 rounded-2xl
              transition-all duration-300
            "
          >
            <AnimatePresence mode="wait">
              {sent ? (
                /* Success state */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-cyan-400/10 flex items-center justify-center text-blue-500 dark:text-cyan-400 text-2xl">
                    ✓
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Message sent!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={reset}
                    className="mt-2 px-5 py-2 rounded-lg border border-blue-500 dark:border-cyan-400 text-blue-500 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-800 text-sm transition"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                    Send a Message
                  </h3>

                  <div className="flex flex-col gap-4">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Name *
                        </label>
                        <input
                          type="text"
                          placeholder="YOUR NAME"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className={`
                            px-4 py-2.5 rounded-lg text-sm
                            border ${errors.name ? "border-red-400" : "border-white/20 dark:border-white/10"}
                            bg-white/50 dark:bg-white/5
                            text-gray-900 dark:text-white
                            placeholder-gray-400 dark:placeholder-gray-500
                            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400
                            transition-all
                          `}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Email *
                        </label>
                        <input
                          type="email"
                          placeholder="YOUR EMAIL"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className={`
                            px-4 py-2.5 rounded-lg text-sm
                            border ${errors.email ? "border-red-400" : "border-white/20 dark:border-white/10"}
                            bg-white/50 dark:bg-white/5
                            text-gray-900 dark:text-white
                            placeholder-gray-400 dark:placeholder-gray-500
                            focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400
                            transition-all
                          `}
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder=""
                        value={form.subject}
                        onChange={(e) =>
                          setForm({ ...form, subject: e.target.value })
                        }
                        className="
                          px-4 py-2.5 rounded-lg text-sm
                          border border-white/20 dark:border-white/10
                          bg-white/50 dark:bg-white/5
                          text-gray-900 dark:text-white
                          placeholder-gray-400 dark:placeholder-gray-500
                          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400
                          transition-all
                        "
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="YOUR MESSAGE"
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className={`
                          px-4 py-2.5 rounded-lg text-sm resize-none
                          border ${errors.message ? "border-red-400" : "border-white/20 dark:border-white/10"}
                          bg-white/50 dark:bg-white/5
                          text-gray-900 dark:text-white
                          placeholder-gray-400 dark:placeholder-gray-500
                          focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400
                          transition-all
                        `}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={sending}
                      className="
                        flex items-center justify-center gap-2
                        px-6 py-3 rounded-lg
                        bg-blue-500 dark:bg-cyan-400
                        text-white dark:text-black
                        font-semibold
                        hover:bg-blue-600 dark:hover:bg-cyan-500
                        disabled:opacity-50 disabled:cursor-not-allowed
                        transition-all duration-300
                      "
                    >
                      {sending ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.8,
                              ease: "linear",
                            }}
                            style={{ display: "inline-block" }}
                          >
                            ◌
                          </motion.span>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
