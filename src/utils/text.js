const handleQuoteRequest = (productName = "") => {
  const phoneNumber = "+919585854540"; // Using the number from your footer
  console.log('Hi');
  
  let message = "";
  if (productName) {
    message = `Hi Online Kings, I would like to customize/order ${productName}. Please provide me with more details.`;
  } else {
    message = "Hi Online Kings, I would like to get a quote for your printing services.";
  }
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};


export default handleQuoteRequest