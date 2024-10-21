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
      <div className="items-center justify-center w-full min-h-[500px] rounded-3xl border-[1px] border-black/40 bg-black/5 h-full flex">
        <span>
          Email Tidak Ditemukan <br />
          <a
            href="https://t.me/nezoka1"
            target="__blank"
            className="text-blue-500 underline"
          >
            Hubungi Kami
          </a>
        </span>
      </div>
    );
  }

  return (
    <div className="border-[1px] border-black/40 h-[600px] w-full overflow-auto px-5 mt-2 flex flex-col gap-10 rounded-3xl">
      {emails.map((email) => (
        <div key={email.uid} className="p-1">
          <div dangerouslySetInnerHTML={{ __html: email.body }} />
        </div>
      ))}
    </div>
  );
};

export default EmailList;
