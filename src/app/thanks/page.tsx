export const metadata = {
    title: "Thanks | iWorkRemote",
  };
  
  type SP = {
    status?: string;
    type?: string;
  };
  
  export default function ThanksPage({
    searchParams,
  }: {
    searchParams: SP;
  }) {
    const status = (searchParams?.status || "").toLowerCase();
    const type = (searchParams?.type || "").toLowerCase();
  
    // Treat any of these as success
    const isOk =
      status === "ok" ||
      status === "success" ||
      status === "1" ||
      status === "true";
  
    const title = isOk ? "Thanks — you're all set!" : "Something went wrong";
  
    let body = "Please go back and try again.";
    if (isOk) {
      if (type === "newsletter") {
        body = "You're on the list. We'll keep you posted about iWR updates.";
      } else if (type === "exploration") {
        body =
          "We received your Exploration Call application. Expect a quick follow-up to schedule your 20-minute call.";
      } else {
        body = "We received your submission. Thanks for reaching out!";
      }
    }
  
    return (
      <div className="mx-auto max-w-screen-md px-6 py-20 text-center">
        <h1 className="font-display text-3xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-3 text-slate-600">{body}</p>
  
        <div className="mt-8">
          <a href="/" className="btn-brand rounded-xl px-4 py-2">
            Back to Home
          </a>
        </div>
      </div>
    );
  }
  