import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MessageBannerStyles = styled.div`
  padding: 0.5rem 1rem;
  background: #00e3ff;
  text-align: center;
  p {
    margin: 0;
  }
`;

export default function MessageBanner({ duration, children }) {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false);
    }, duration);
  }, [duration]);

  if (!showMessage) return null;

  return <MessageBannerStyles>{children}</MessageBannerStyles>;
}
