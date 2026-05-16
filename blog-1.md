TypeScript-এ any VS unknown কেন unknown নিরাপদ এবং Type Narrowing কী?

Introduction: TypeScript ব্যবহারের মূল উদ্দেশ্য হলো টাইপ সেফটি নিশ্চিত করা। কিন্তু আমরা অনেক সময় এমন ডেটা নিয়ে কাজ করি যার টাইপ আগে থেকে জানা থাকে না। এক্ষেত্রে any এবং unknown দুটি অপশন থাকলেও তাদের ব্যবহারের প্রভাব সম্পূর্ণ ভিন্ন। আজকের ব্লগে আমরা জানবো কেন any কে "Type Safety Hole" বলা হয় এবং কেন unknown ব্যবহার করা বুদ্ধিমানের কাজ।

The "any" Type: A Type Safety Hole any টাইপ ব্যবহার করার অর্থ হলো আপনি TypeScript-কে বলছেন ওই ভেরিয়েবলের উপর কোনো চেক না করতে। এটি টাইপ সিস্টেমকে সম্পূর্ণ ডিজেবল করে দেয়।

Code Snipped :

let data: any = "Hello World"; data.hello(); // এটি কম্পাইল টাইমে কোনো এরর দিবে না, কিন্তু রানটাইমে ক্রাশ করবে।

এখানে data.hello() মেথডটি নেই, তবুও TypeScript চুপ করে থাকে। এটাই হলো "Type Safety Hole"—যেখান দিয়ে বাগ (Bug) আপনার কোডে ঢুকে পড়ে।

Why "unknown" is Safer because unknown টাইপও যেকোনো ভ্যালু গ্রহণ করতে পারে, কিন্তু এটি any-এর মতো অনিয়ন্ত্রিত নয়। আপনি unknown ভেরিয়েবলের কোনো প্রপার্টি বা মেথড সরাসরি ব্যবহার করতে পারবেন না যতক্ষণ না আপনি নিশ্চিত হচ্ছেন সেটি আসলে কী।

Example

Code Snipped :

let input: unknown = "Hello"; // input.toUpperCase(); // এটি এরর দিবে (Object is of type 'unknown')

Type Narrowing: The Key to Safety : unknown ভ্যালুকে ব্যবহারযোগ্য করার প্রক্রিয়াকেই Type Narrowing বলে। এর মাধ্যমে আমরা চেক করি ভ্যালুটির টাইপ আসলে কী।

Code Snipped :

if (typeof input === "string") { console.log(input.toUpperCase()); // এখন এটি নিরাপদ এবং কাজ করবে! }

টাইপ ন্যারোইং করার জন্য আমরা typeof, instanceof অথবা কাস্টম টাইপ গার্ড ব্যবহার করতে পারি।

Conclusion : সহজ কথায়, any মানে হলো "আমি জানি না এবং আমি পরোয়া করি না", আর unknown মানে হলো "আমি জানি না, তাই কাজ করার আগে আমাকে চেক করে নিতে হবে"। কোডকে বাগ-মুক্ত রাখতে সব সময় unknown ব্যবহার করা উচিত।