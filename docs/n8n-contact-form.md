# Integracao do formulario de contato

O formulario do site tem duas formas de envio:

1. **Padrao atual:** FormSubmit, enviando direto para `bluecat.tech77@gmail.com`.
2. **Opcional no futuro:** n8n, usando `VITE_N8N_CONTACT_WEBHOOK_URL`.

Se `VITE_N8N_CONTACT_WEBHOOK_URL` estiver vazio, o site usa automaticamente:

```env
VITE_CONTACT_FORM_ENDPOINT="https://formsubmit.co/ajax/bluecat.tech77@gmail.com"
```

Na primeira submissão real, o FormSubmit pode enviar um e-mail de confirmação
para `bluecat.tech77@gmail.com`. Basta abrir esse e-mail e confirmar para
ativar o encaminhamento.

## Payload enviado pelo FormSubmit

```json
{
  "Nome": "Nome do lead",
  "Email": "lead@email.com",
  "Assunto": "Assunto",
  "Mensagem": "Mensagem enviada",
  "Página": "https://...",
  "Data": "2026-05-27T...",
  "_subject": "Novo contato do site: Assunto",
  "_template": "table",
  "_captcha": "false"
}
```

## Opcional: usar n8n no futuro

## 1. Criar o webhook

No n8n, crie um workflow com:

1. **Webhook**
   - Method: `POST`
   - Path: `bluecat-contact`
   - Response mode: `Using Respond to Webhook node`

2. **Send Email**, Gmail ou SMTP
   - To: `bluecat.tech77@gmail.com`
   - Subject: `Novo contato do site: {{$json.subject}}`
   - Body:

```text
Nome: {{$json.name}}
Email: {{$json.email}}
Assunto: {{$json.subject}}

Mensagem:
{{$json.message}}

Origem: {{$json.source}}
Página: {{$json.pageUrl}}
Data: {{$json.submittedAt}}
```

3. **Respond to Webhook**
   - Status code: `200`
   - Body:

```json
{ "ok": true }
```

## 2. Configurar o site

Depois de ativar o workflow no n8n, copie a URL de producao do webhook e coloque no `.env`:

```env
VITE_N8N_CONTACT_WEBHOOK_URL="https://SEU_N8N/webhook/bluecat-contact"
```

Reinicie o servidor local depois de alterar o `.env`.

## Payload recebido pelo n8n

```json
{
  "name": "Nome do lead",
  "email": "lead@email.com",
  "subject": "Assunto",
  "message": "Mensagem enviada",
  "targetEmail": "bluecat.tech77@gmail.com",
  "source": "bluecat-site-contact-form",
  "pageUrl": "https://...",
  "submittedAt": "2026-05-27T..."
}
```

## Próxima evolução com IA

Depois que o envio de e-mail estiver funcionando, adicione um node de IA antes do envio para classificar o lead por tipo, urgência e serviço desejado. O resultado pode ser incluído no assunto do e-mail ou no corpo da mensagem.
