import React from 'react';
import PageTransition from '../../components/PageTransition/PageTransition';
import ContactSection from '../../sections/ContactSection';
import './Contact.css';

function Contact() {
  return (
    <PageTransition>
      <ContactSection />
    </PageTransition>
  );
}

export default Contact;
