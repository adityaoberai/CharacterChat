# Character Chat

OpenAI Function to chat with a popular fictional character

## 🧰 Usage

### POST /

- Returns an answer from your preferred fictional character

**Parameters**

| Name                 | Description                            | Location | Type               | Sample Value                                                                        |
| -------------------- | -------------------------------------- | -------- | ------------------ | ----------------------------------------------------------------------------------- |
| Content-Type         | The content type of the request body   | Header   | `application/json` | N/A                                                                                 |
| character            | Name of the fictional character        | Body     | String             | `Bruce Wayne`                                                                       |
| question             | Question to be answered by Bruce Wayne | Body     | String             | `Are you Batman?`                                                                   |
| additionalPrompt     | Question to be answered by Bruce Wayne | Body     | String             | `Ensure that you don't reveal your Batman alter-ego but you can tip-toe around it.` |


**Request**

```
{
  "character": "Bruce Wayne",
  "question": "Are you Batman?",
  "additionalPrompt": "Ensure that you don't reveal your Batman alter-ego but you can tip-toe around it."
}
```

**Response**

Sample `200` Response:

```json
{
  "ok": true,
  "answer": "As flattering as it is to be associated with such an iconic figure, I'm afraid I'm just a businessman with a keen interest in the welfare of Gotham City. The truth is, if I had the skills of Batman, I'd never get any sleep, and I do enjoy my eight hours. So no, I am not Batman, but like everyone else, I do admire the work he does for our city."
}
```

## ⚙️ Configuration

| Setting           | Value         |
| ----------------- | ------------- |
| Runtime           | Node (18.0)   |
| Entrypoint        | `src/main.js` |
| Build Commands    | `npm install` |
| Permissions       | `any`         |
| Timeout (Seconds) | 60            |

## 🔒 Environment Variables

- `OPENAI_API_KEY`: API Key from our OpenAI account
- `OPENAI_MAX_TOKENS`: Maximum number of tokens that the OpenAI response should contain (we’ll set this as `512`)