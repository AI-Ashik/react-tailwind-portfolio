import { Resend } from "resend";
// import { EmailTemplate } from "../../../components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Ashik <arifulislamashik07@gmail.com>",
      to: ["arifulislamashik07@gmail.com"],
      subject: "Hello world",
      //   react: EmailTemplate({ firstName: "John" }),
      react: (
        <>
          <p>Email Body</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
