declare module 'tailwindcss' {
    export interface Config {
      content: string[];
      theme: {
        extend: Record<string, unknown>;
      };
      plugins: any[];
      [key: string]: unknown;
    }
  }
  