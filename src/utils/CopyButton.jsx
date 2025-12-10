// src/components/CopyButton.jsx
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CopyButton = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded-md hover:bg-neutral-200/50 transition-colors"
      aria-label={`Copy ${label}`}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-neutral-500 group-hover:text-neutral-700 transition-colors" />
      )}
    </button>
  );
};

export default CopyButton;