declare module 'react-google-recaptcha' {
    import { Component, RefObject } from 'react';
  
    export interface ReCAPTCHAProps {
      sitekey: string;
      onChange?: (token: string | null) => void;
      theme?: 'light' | 'dark';
      size?: 'compact' | 'normal' | 'invisible';
      tabindex?: number;
      onExpired?: () => void;
      onErrored?: () => void;
      ref?: RefObject<ReCAPTCHA>;
    }
  
    export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {
      execute(): void;
      reset(): void;
    }
  }
  