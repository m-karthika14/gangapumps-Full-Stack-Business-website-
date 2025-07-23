// controllers/leadController.js

const Lead = require('../models/Lead');
const { Resend } = require('resend');

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

exports.addLead = async (req, res) => {
  try {
    const { type, name, phone, email, productOfInterest, message } = req.body;

    if (!type || !name || !phone) {
      return res.status(400).json({ message: 'type, name, and phone are required.' });
    }

    const newLead = new Lead({
      type,
      name,
      phone,
      email,
      productOfInterest,
      message
    });

    await newLead.save();

    // Compose the body based on form type
    let subject, emailBody;
    if (type === "popup") {
      subject = "New Popup Lead - Gangapumps";
      emailBody = `
        <p>A new Popup form submission has been received:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Product of Interest:</strong> ${productOfInterest || "N/A"}</li>
          <li><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</li>
        </ul>
      `;
    } else if (type === "estimate") {
      subject = "New Estimate Request - Gangapumps";
      emailBody = `
        <p>A new Estimate form submission has been received:</p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email || "N/A"}</li>
          <li><strong>Message:</strong> ${message || "N/A"}</li>
          <li><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</li>
        </ul>
      `;
    } else {
      subject = "New Lead - Gangapumps";
      emailBody = `
        <p>New lead details:</p>
        <ul>
          <li><strong>Type:</strong> ${type}</li>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Email:</strong> ${email || "N/A"}</li>
          <li><strong>Product of Interest:</strong> ${productOfInterest || "N/A"}</li>
          <li><strong>Message:</strong> ${message || "N/A"}</li>
          <li><strong>Time:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</li>
        </ul>
      `;
    }

    // Send lead notification to your team
    await resend.emails.send({
      from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
      to: ['sales@gangapumps.com'],
      subject,
      html: emailBody
    });

    // Optional: Auto-reply to customer
    if (email) {
      await resend.emails.send({
        from: `"${process.env.FROM_NAME}" <${process.env.FROM_EMAIL}>`,
        to: [email],
        subject: 'Thanks for contacting Ganga Pumps!',
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to Ganga Pumps. We’ve received your request and will get back to you shortly.</p>
          <p>Regards,<br/>Ganga Pumps Team</p>
        `
      });
    }

    res.status(201).json(newLead);
  } catch (error) {
    console.error('❌ Error adding lead or sending email:', error);
    res.status(500).json({ message: 'Failed to add lead or send email', error });
  }
};

exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ date: -1 });
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch leads', error });
  }
};

exports.deleteLead = async (req, res) => {
  try {
    const { id } = req.params;
    await Lead.findByIdAndDelete(id);
    res.status(200).json({ message: 'Lead deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete lead', error });
  }
};
