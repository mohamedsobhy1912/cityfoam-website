import { createContext, useContext, useState } from 'react';

// Shared "inquiry type" so a product's "Request details" button can preselect the contact form.
const InquiryContext = createContext({ type: 0, setType: () => {} });

export function InquiryProvider({ children }) {
  const [type, setType] = useState(0);
  return <InquiryContext.Provider value={{ type, setType }}>{children}</InquiryContext.Provider>;
}

export const useInquiry = () => useContext(InquiryContext);
