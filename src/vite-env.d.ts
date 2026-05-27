/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_N8N_CONTACT_WEBHOOK_URL?: string;
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
