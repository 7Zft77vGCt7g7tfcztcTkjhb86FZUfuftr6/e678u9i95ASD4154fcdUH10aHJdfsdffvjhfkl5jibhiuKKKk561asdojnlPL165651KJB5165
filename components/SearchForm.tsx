import React from 'react';

interface SearchFormProps {
  searchEmail: string;
  setSearchEmail: (email: string) => void;
  onSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  searchEmail,
  setSearchEmail,
  onSearch,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex border-[1px] border-black/40 bg-black/5 rounded-full"
    >
      <input
        type="email"
        placeholder="email@outlook.de"
        required
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
        className=" px-5 w-full focus:outline-none focus:ring-0 bg-transparent text-sm"
      />
      <button
        type="submit"
        className="ml-4 bg-black hover:bg-black/70 active:bg-black/50 text-sm text-white px-4 py-2 rounded-full"
      >
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
