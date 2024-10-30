// import Form from "next/form"

export default function form() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    console.log('formData', formData)
    const response = await fetch("/api/submit", {
      method: "POST",
      body: formData,
    });

    // Handle response if necessary
    const data = await response.json();
    // ...
  }

  return (
    <form className="max-w-md mx-auto bg-white rounded-xl" onSubmit={onSubmit}>
      <input className="form-input rounded-full px-4 py-3" type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
