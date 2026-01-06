
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOpenEmailClient = () => {
    const subject = formData.subject || `Portfolio Inquiry from ${formData.name || 'Visitor'}`;
    const body = `Hi Balvinder,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`;

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      const BREVO_API_KEY = (process.env as any).BREVO_API_KEY || 'YOUR_BREVO_API_KEY_HERE';

      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          sender: { name: "Portfolio Contact", email: PERSONAL_INFO.email },
          to: [{ email: PERSONAL_INFO.email, name: PERSONAL_INFO.name }],
          replyTo: { email: formData.email, name: formData.name },
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          htmlContent: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
              <h2 style="color: #2563eb;">New Portfolio Inquiry</h2>
              <p><strong>From:</strong> ${formData.name} (${formData.email})</p>
              <p><strong>Subject:</strong> ${formData.subject || 'No Subject'}</p>
              <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="white-space: pre-wrap; line-height: 1.6;">${formData.message}</p>
            </div>
          `
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        <p className="mt-4 text-slate-400">
          If you need senior help modernizing or stabilizing
          a production system, I’m open to a conversation.
        </p>
        <p className="text-md mt-4 text-slate-500">Available for contract and part-time engagements.</p>
        {/* Ready for immediate hire or freelance collaborations. Let's talk!</p> */}
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center border border-blue-500/30 shrink-0 group-hover:border-blue-500 transition-colors">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Email</h4>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-indigo-900/30 rounded-lg flex items-center justify-center border border-indigo-500/30 shrink-0 group-hover:border-indigo-400 transition-colors">
              {/* <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg> */}
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path></g></svg>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">LinkedIn</h4>
              {/* <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}  */}
              <a href={PERSONAL_INFO.linkedin} className="text-indigo-400 hover:text-indigo-400 transition-colors">
                {PERSONAL_INFO.linkedin}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center border border-purple-500/30 shrink-0 group-hover:border-purple-400 transition-colors">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Location</h4>
              <p className="text-slate-400">{PERSONAL_INFO.location}(Remote Friendly)</p>
            </div>
          </div>
        </div>

        <div className="relative">
          {status === 'success' ? (
            <div className="h-full min-h-[450px] bg-slate-800/40 border border-green-500/30 rounded-2xl p-8 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-300 shadow-2xl">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400 mb-8">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setStatus('idle')}
                className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 space-y-4 shadow-2xl transition-all duration-300 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Name</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Email</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text"
                  placeholder="Collaboration Opportunity"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase mb-2">Message</label>
                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Hello, I would like to discuss a project..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 resize-none transition-colors"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2">
                {/* <button 
                  disabled={status === 'sending'}
                  type="submit"
                  className={`w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]'}`}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button> */}

                <button
                  type="button"
                  onClick={handleOpenEmailClient}
                  className="w-full py-3 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Email App
                </button>
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm text-center animate-pulse">Delivery failed. Try opening your email app instead.</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
