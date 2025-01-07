import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import { FormProvider } from "./_components/FormContext";

const josefin = Josefin_Sans({
  subsets:['latin'],
  display:'swap'
}) ;


export const metadata = {
  title: "Keeper App",
  description: "A note saving app for the users around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <FormProvider>

        {children}
        </FormProvider>
      </body>
    </html>
  );
}
