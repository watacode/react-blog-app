import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [send, setSend] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitButton = async (e) => {
    e.preventDefault();

    let hasError = false;
    let newErrors = { name: "", email: "", message: "" };

    if (form.name === "") {
      hasError = true;
      newErrors.name = "名前の入力は必須です";
    } else if (form.name.length > 30) {
      hasError = true;
      newErrors.name = "30文字以内で入力してください";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.email === "") {
      hasError = true;
      newErrors.email = "メールアドレスの入力は必須です";
    } else if (!emailPattern.test(form.email)) {
      hasError = true;
      newErrors.email = "メールアドレスの形式で入力してください";
    }
    if (form.message === "") {
      hasError = true;
      newErrors.message = "本文の入力は必須です";
    } else if (form.message.length > 500) {
      hasError = true;
      newErrors.message = "500文字以内で入力してください";
    }
    setError(newErrors);

    if (!hasError) {
      setSend(true);
      const res = await fetch(
        "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts",
        {
          method: "POST",
          body: JSON.stringify(form),
        },
      );

      alert("送信しました");
      setSend(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const clearButton = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="px-6 py-2">
        <h1 className="text-2xl font-bold my-6">問い合わせフォーム</h1>

        <form className="flex flex-col">
          <label>お名前</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={send}
            className="border border-gray-400 rounded px-3 py-2"
          />
          <p>{error.name}</p>

          <label>メールアドレス</label>
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={send}
            className="border border-gray-400 rounded px-3 py-2"
          />
          <p>{error.email}</p>

          <label>本文</label>
          <input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            disabled={send}
            className="border border-gray-400 rounded px-3 py-2"
          />
          <p>{error.message}</p>

          <button onClick={submitButton} disabled={send}>
            送信
          </button>
          <button onClick={clearButton} disabled={send}>
            クリア
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
