/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import EmailList from '@/components/EmailList';
import { MultiStepLoader } from '@/components/HowToUse';
import SearchForm from '@/components/SearchForm';
import { howToUse } from '@/constant';
import { IconSquareRoundedX } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import cardFlip from '@/assets/images/cardflip.gif';
import Nezoka from '@/assets/images/nezoka.webp';
import { useLoading } from '@/components/LoadingProvider';

export default function Home() {
  const [emails, setEmails] = useState([]);
  const [searchEmail, setSearchEmail] = useState('');
  const [lastSearchedEmail, setLastSearchedEmail] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [refreshCountdown, setRefreshCountdown] = useState(50);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchEmails = async (email: string) => {
    setLoadingEmail(true);
    setIsRefreshing(true);
    try {
      const response = await fetch(
        `/api/emails?search=${encodeURIComponent(email)}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch emails');
      }
      const data = await response.json();
      setEmails(data);
    } catch (error) {
      console.error('Error fetching emails:', error);
    } finally {
      setLoadingEmail(false);
      setIsRefreshing(false);
      setHasSearched(true);
    }
  };

  const handleSearch = () => {
    if (searchEmail.trim()) {
      fetchEmails(searchEmail);
      setLastSearchedEmail(searchEmail);
      setRefreshCountdown(50);
    }
  };
  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;
    if (
      hasSearched &&
      searchEmail.trim() &&
      searchEmail === lastSearchedEmail
    ) {
      countdownInterval = setInterval(() => {
        setRefreshCountdown((prevCountdown) => {
          if (prevCountdown === 1) {
            fetchEmails(searchEmail);
            return 50;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000); // Every second
    }
    return () => {
      if (countdownInterval) {
        clearInterval(countdownInterval);
      }
    };
  }, [hasSearched, searchEmail, lastSearchedEmail]);

  const { loading, setLoading } = useLoading();
  return (
    <div className="max-sm:w-full w-fit flex flex-col justify-center items-center pt-48 pb-40">
      <MultiStepLoader
        loadingStates={howToUse}
        loading={loading}
        duration={3000}
      />
      {loading && (
        <button
          className="fixed top-4 right-4 z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10 text-red-500" />
        </button>
      )}
      <div className="flex w-full justify-center items-center lg:items-end gap-5 flex-col lg:flex-row lg:pr-5">
        <div className="w-full px-5 flex flex-col lg:justify-center lg:items-center">
          <SearchForm
            searchEmail={searchEmail}
            setSearchEmail={setSearchEmail}
            onSearch={handleSearch}
          />
          <div className="flex overflow-hidden w-full mt-3">
            {loadingEmail ? (
              <div className="items-center justify-center w-full rounded-3xl border-[1px] border-black/40 h-full flex flex-col min-h-[500px]">
                <div className="relative flex items-center justify-center">
                  <div className="w-24 h-24 border-4 border-b-transparent border-black rounded-full animate-spin" />
                  <Image
                    src={Nezoka}
                    alt="Loading Logo"
                    width={100}
                    height={100}
                    loading="lazy"
                    className="absolute p-5 animate-pulse"
                  />
                </div>
                <p className="mt-2">Mohon tunggu beberapa saat...</p>
              </div>
            ) : (
              <>
                {hasSearched ? (
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      {/* Display countdown timer */}
                      <p className="text-gray-500">
                        Refreshing ({lastSearchedEmail})
                        <br className="md:hidden" />
                        in {refreshCountdown} seconds...
                      </p>
                      {/* Show "Refreshing..." message when refreshing */}
                      {isRefreshing && (
                        <p className="text-blue-500 animate-pulse">
                          Refreshing emails...
                        </p>
                      )}
                    </div>
                    <EmailList emails={emails} />
                  </div>
                ) : (
                  <div className="items-center justify-center w-full min-h-[500px] rounded-3xl border-[1px] border-black/40 bg-black/5 h-full flex flex-col">
                    Submit email terlebih dahulu
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <Image
          src={cardFlip}
          alt="card flip Nezoka"
          width={650}
          height={650}
          className="max-md:px-5"
        />
      </div>
    </div>
  );
}
