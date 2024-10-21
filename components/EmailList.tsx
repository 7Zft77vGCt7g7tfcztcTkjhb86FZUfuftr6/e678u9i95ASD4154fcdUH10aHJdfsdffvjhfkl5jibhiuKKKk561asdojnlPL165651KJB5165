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
      <div className="items-center justify-center w-full rounded-3xl border-[1px] border-black/40 bg-black/5 h-full flex px-10">
        <span>
          Email Tidak Ditemukan, Pastikan email yang kamu masukan benar, lalu
          coba lagi.
        </span>
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
