// Mock email integration - in a real application, this would connect to an email service
export const SendEmail = async ({ to, subject, body }) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real application, you would make an API call to your backend
  // which would then send the email using a service like SendGrid, AWS SES, etc.
  console.log('Email would be sent:', { to, subject, body });
  
  // For demo purposes, we'll just return success
  return { success: true, messageId: 'demo-' + Date.now() };
};
