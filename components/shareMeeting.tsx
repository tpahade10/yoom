import { useCall } from '@stream-io/video-react-sdk';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export const ShareMeeting = () => {
  const call = useCall();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const meetingLink = `${window.location.origin}/meeting/${call?.id}`;
    await navigator.clipboard.writeText(meetingLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-lg bg-gray-800 p-2">
      <span className="text-sm text-gray-300">Meeting ID: {call?.id}</span>
      <button
        onClick={handleCopy}
        className="rounded-lg p-2 transition-colors hover:bg-gray-700"
        title="Copy meeting link"
      >
        {copied ? (
          <Check className="size-4 text-green-500" />
        ) : (
          <Copy className="size-4 text-gray-400" />
        )}
      </button>
    </div>
  );
};