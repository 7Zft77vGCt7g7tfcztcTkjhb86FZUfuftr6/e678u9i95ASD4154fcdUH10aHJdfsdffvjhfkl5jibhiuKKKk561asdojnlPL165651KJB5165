import Link from 'next/link';
import React from 'react';

interface Email {
  uid: string;
  from: string;
  to: string;
  subject: string;
  date: string;
  body: string;
}

interface EmailListProps {
  emails: Email[];
}

const EmailList: React.FC<EmailListProps> = ({ emails }) => {
  if (emails.length === 0) {
    return (
      <div className="items-center justify-center w-full rounded-3xl border-[1px] border-black/40 bg-black/5 h-full flex flex-col px-10 text-center">
        <span>
          Email Tidak Ditemukan, Pastikan email yang kamu masukan benar, lalu
          coba lagi.
        </span>
        <Link
          href="https://t.me/nezoka1"
          target="_blank"
          className="text-blue-500 underline"
        >
          Atau hubungi Kami
        </Link>
      </div>
    );
  }

  return (
    <div className="border-[1px] border-black/40 w-full overflow-auto px-5 mt-2 flex flex-col gap-10 rounded-3xl">
      {emails.map((email) => (
        <div key={email.uid} className="p-1">
          <div dangerouslySetInnerHTML={{ __html: email.body }} />
        </div>
      ))}
    </div>
  );
};

export default EmailList;
