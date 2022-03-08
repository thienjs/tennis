import AppLayout from "@lib/components/Layouts/AppLayout";
import Image from 'next/image';

const Page = () => {
  return (
    <>
      <AppLayout>
        {/* <blockquote> */}
        <h1>Tennis Social</h1>
        <p>
         Social App for tennis players
        </p>
        <blockquote>
          <p>  
           meet, chat, learn with other players
          </p>
        </blockquote>
      </AppLayout>
    </>
  );
};

export default Page;
