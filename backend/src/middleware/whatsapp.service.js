exports.sendWhatsapp =
async (
  phone,
  message
)=>{

  console.log(
    `WhatsApp Sent:
    ${phone}
    ${message}`
  );

  return true;
};
