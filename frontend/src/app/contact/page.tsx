import ContactForm from
"../../components/ContactForm";

export default function ContactPage() {

  return (
    <div
      style={{
        padding:"50px",
        maxWidth:"900px",
        margin:"auto"
      }}
    >

      <h1>
        Contact Us
      </h1>

      <div
        style={{
          marginTop:"20px"
        }}
      >

        <p>
          Facebook: Premium Account Store
        </p>

        <p>
          Telegram: @premiumstore
        </p>

        <p>
          WhatsApp: +8801XXXXXXXXX
        </p>

      </div>

      <div
        style={{
          marginTop:"30px"
        }}
      >

        <ContactForm />

      </div>

    </div>
  );
}
