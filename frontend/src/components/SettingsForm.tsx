"use client";

import { useState } from "react";

export default function SettingsForm() {

  const [settings,setSettings] =
  useState({
    siteName:"Premium Account Store",
    supportEmail:"",
    supportWhatsapp:"",
    facebook:"",
    telegram:""
  });

  return (
    <form className="app-card">

      <h2>
        Website Settings
      </h2>

      <input
        type="text"
        placeholder="Site Name"
        value={settings.siteName}
        onChange={(e)=>
          setSettings({
            ...settings,
            siteName:e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Support Email"
        value={settings.supportEmail}
        onChange={(e)=>
          setSettings({
            ...settings,
            supportEmail:e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="WhatsApp"
        value={settings.supportWhatsapp}
        onChange={(e)=>
          setSettings({
            ...settings,
            supportWhatsapp:e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Facebook Link"
        value={settings.facebook}
        onChange={(e)=>
          setSettings({
            ...settings,
            facebook:e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Telegram Link"
        value={settings.telegram}
        onChange={(e)=>
          setSettings({
            ...settings,
            telegram:e.target.value
          })
        }
      />

      <button>
        Save Settings
      </button>

    </form>
  );
}
