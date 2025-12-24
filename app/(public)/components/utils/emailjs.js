import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

// Initialize with your EmailJS credentials
emailjs.init('z9EFpzKDjYZ10nfV-'); 

export const sendEmail = async (templateId, templateParams) => {
  try {
    const response = await emailjs.send(
      'service_hbk6vtl',
      templateId,
      templateParams
    );

    // Show sweet success message
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      confirmButtonColor: '#3085d6'
    });

    return { success: true, response };
  } catch (error) {
    console.error('Email sending failed:', error);

    // Show sweet error message
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to send your message. Please try again later.',
      confirmButtonColor: '#d33'
    });

    return { success: false, error };
  }
};
