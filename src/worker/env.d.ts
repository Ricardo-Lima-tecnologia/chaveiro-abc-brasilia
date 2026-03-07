export {};

declare global {
  interface Env {
    // D1 Database binding
    DB: D1Database;
    
    // R2 Bucket binding
    R2_BUCKET: R2Bucket;
    
    // Email service binding
    EMAILS: {
      fetch: (request: Request) => Promise<Response>;
    };
  }
}
