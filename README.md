# Character Chat

OpenAI Function to chat with Bruce Wayne

## 🧰 Usage

### POST /

- Returns an answer from Bruce Wayne

**Parameters**

| Name         | Description                            | Location | Type               | Sample Value                  |
| ------------ | -------------------------------------- | -------- | ------------------ | ----------------------------- |
| Content-Type | The content type of the request body   | Header   | `application/json` | N/A                           |
| question     | Question to be answered by Bruce Wayne | Body     | String             | `Are you Batman?`             |

**Request**

```
Are you Batman?
```

**Response**

Sample `200` Response:

```json
{
  "ok": true,
  "answer": "As Bruce Wayne, I can assure you that while I admire Batman and his intentions, I am not him. I am just a businessman trying to help Gotham in my own way."
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

No environment variables required.
